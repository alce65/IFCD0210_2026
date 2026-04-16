import debug from 'debug';
import { env } from '../config/env.ts';
import type { Pool } from 'pg';
import type { Movie, RelationMovieGenre } from '../entities/movie.ts';
import { SqlError } from '../errors/sql-error.ts';

const log = debug(`${env.PROJECT_NAME}:repo.movies`);
log('Starting movies repository...');

type MovieWithInfo = Movie & { info_genres: string[] };

export class MoviesRepo {
    private pool: Pool;
    constructor(pool: Pool) {
        this.pool = pool;
    }

    async readAllMovies() {
        const q = `
            SELECT 
                movie_id AS id, 
                title, 
                release_year as year, 
                director, 
                duration, 
                poster, 
                rate 
            FROM movies `;
        const { rows } = await this.pool.query<Movie>(q);
        return rows;
    }

    private obtainGenre(movie: MovieWithInfo): Movie {
        if (movie.info_genres) {
            movie.genres = movie.info_genres.map((g) => {
                const [id, name] = g.split('|');
                return { id: Number(id), name: name as string };
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { info_genres, ...rest } = movie as MovieWithInfo;
        return rest;
    }

    async readAllMoviesWithGenres() {
        const q = `
           select mo.movie_id AS id, 
                mo.title,
                ARRAY_AGG(ge.genre_id || '|' || ge.name) as info_genres,
                mo.release_year as year, 
                mo.director, 
                mo.duration, 
                mo.poster, 
                mo.rate
            from movies mo
            join movies_genres mg
            on mo.movie_id = mg.movie_id
            join genres ge
            on ge.genre_id = mg.genre_id
            group by mo.movie_id 
            order by mo.movie_id;
            `;
        const { rows } = await this.pool.query<MovieWithInfo>(q);
        const result = rows.map(this.obtainGenre);
        return result as Movie[];
    }

    async readMoviesWithGenresById(id: number) {
        const q = `
            select mo.movie_id AS id, 
                mo.title,
                ARRAY_AGG(ge.genre_id || '|' || ge.name) as info_genres,
                mo.release_year as year, 
                mo.director, 
                mo.duration, 
                mo.poster, 
                mo.rate
            from movies mo
            join movies_genres mg
            on mo.movie_id = mg.movie_id
            join genres ge
            on ge.genre_id = mg.genre_id
            where mo.movie_id = $1
            group by mo.movie_id;
        `;
        const { rows } = await this.pool.query<MovieWithInfo>(q, [id]);

        if (rows.length === 0) {
            throw new SqlError(`Genre with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'SELECT_FAILED',
                sqlMessage: `No movie found with id ${id}`,
            });
        }

        const result = rows.map(this.obtainGenre);
        return result[0] as Movie;
    }

    async findMoviesWithGenresByTitle(title: string) {
        const q = `
        select mo.movie_id AS id, 
            mo.title,
            ARRAY_AGG(ge.genre_id || '|' || ge.name) as info_genres,
            mo.release_year as year, 
            mo.director, 
            mo.duration, 
            mo.poster, 
            mo.rate
        from movies mo
        join movies_genres mg
        on mo.movie_id = mg.movie_id
        join genres ge
        on ge.genre_id = mg.genre_id
        where mo.title ilike $1
        group by mo.movie_id
        order by mo.movie_id
        `;

        const { rows } = await this.pool.query<MovieWithInfo>(q, [
            `%${title}%`,
        ]);
        const result = rows.map(this.obtainGenre);
        return result as Movie[];
    }

    async createMovie(movie: Omit<Movie, 'id'>) {
        const q = `
            INSERT INTO movies (title, release_year, director, duration, poster, rate) 
            VALUES ($1, $2, $3, $4, $5, $6) 
            RETURNING movie_id AS id, title, release_year as year, director, duration, poster, rate
        `;
        const { rows } = await this.pool.query<Movie>(q, [
            movie.title,
            movie.year,
            movie.director,
            movie.duration,
            movie.poster,
            movie.rate,
        ]);

        // La indicamos a TS que el id del movie se encuentra en rows[0]
        // y que es un Movie

        const createdMovie = rows[0] as Movie;
        createdMovie.rate = Number(createdMovie.rate);

        if (movie.genres) {
            createdMovie.genres = [];
        }

        for await (const genre of movie.genres ?? []) {
            const q2 = `
                INSERT INTO movies_genres (movie_id, genre_id) 
                VALUES ($1, $2)
            `;
            await this.pool.query(q2, [createdMovie.id, genre.id]);
            createdMovie.genres?.push(genre);
        }

        return createdMovie;
    }

    // No incluye la actualización de géneros asociados a la película
    async updateMovie(
        id: number,
        movie: Partial<Omit<Movie, 'id' | 'genres'>>,
    ) {
        const q = `
            UPDATE movies SET 
                title = COALESCE($2, title), 
                release_year = COALESCE($3, release_year), 
                director = COALESCE($4, director), 
                duration = COALESCE($5, duration), 
                poster = COALESCE($6, poster), 
                rate = COALESCE($7, rate) 
            WHERE movie_id = $1 
            RETURNING movie_id AS id, title, release_year as year, director, duration, poster, rate::int
        `;

        const { rows } = await this.pool.query<Movie>(q, [
            id,
            movie.title,
            movie.year,
            movie.director,
            movie.duration,
            movie.poster,
            movie.rate,
        ]);

        if (rows.length === 0) {
            throw new SqlError(`Genre with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'UPDATE_FAILED',
                sqlMessage: `No movie found with id ${id}`,
            });
        }

        const updatedMovie = rows[0] as Movie;

        // if (movie.genres) {
        //     updatedMovie.genres = [];
        // }

        // for await (const genre of movie.genres ?? []) {
        //     const q2 = `
        //         INSERT INTO movies_genres (movie_id, genre_id)
        //         VALUES ($1, $2)
        //         ON CONFLICT DO NOTHING
        //     `;
        //     await this.pool.query(q2, [updatedMovie.id, genre.id]);
        //     updatedMovie.genres?.push(genre);
        // }

        return updatedMovie;
    }

    async toggleMovieGenres(movieId: number, genreId: number) {
        // async changeMovieGeneres(movie_id: string, genere: string): Promise<void> {
        // Obtener el ID del género y comprobar si existe
        // const q0 = `select genre_id as id from genres where name = $1`;
        // const { rows } = await this.client.query<Genere>(q0, [genere]);
        // if (rows.length === 0) {
        //     throw new SqlError(`Genere with name ${genere} not found`, {
        //         cause: { name: genere },
        //         code: 'GENERE_NOT_FOUND',
        //     });
        // }
        // const genere_id = (rows[0] as Genere).id;

        // Se intenta borra el genero de la película
        const q = `
            delete from movies_genres where movie_id = $1 and genre_id = $2 
            RETURNING  movie_id, genre_id`;

        const { rows: result1 } = await this.pool.query<RelationMovieGenre>(q, [
            movieId,
            genreId,
        ]);

        if (result1.length === 1) {
            // log('Movie genere deleted:', genere, 'for movie id:', movie_id);
            const deletedRelation = result1[0] as RelationMovieGenre;
            return {...deletedRelation, isDeleted: true };    
        }

        // Si no se ha borrado, se añade el nuevo genero

        const q2 = `insert into movies_genres (movie_id, genre_id) 
            values ($1, $2) RETURNING movie_id, genre_id;`;
        // const values = generes.map((genere) => [id, genere]);
        const { rows: result2 } = await this.pool.query<RelationMovieGenre>(
            q2,
            [movieId, genreId],
        );

        if (result2.length === 0) {
            throw new SqlError('Movie genre not updated', {
                cause: { movieId, genreId },
                code: 'MOVIE_GENRE_NOT_UPDATED',
            });
        }

        // log('Movie genres updated with', genere, 'for movie id:', movie_id);
        const newRelation = result2[0] as RelationMovieGenre;
        return {...newRelation, isDeleted: false };
    }

    async deleteMovie(id: number) {
        const q = `
            DELETE FROM movies WHERE movie_id = $1
            RETURNING movie_id AS id, title, release_year as year, director, duration, poster, rate::int
        `;
        const { rows } = await this.pool.query<Movie>(q, [id]);

        if (rows.length === 0) {
            throw new SqlError(`Genre with id ${id} not found`, {
                code: 'NOT_FOUND',
                sqlState: 'DELETE_FAILED',
                sqlMessage: `No movie found with id ${id}`,
            });
        }
        return rows[0] as Movie;
    }

    // addGenreToMovie(movieId: number, genreId: number)

    // removeGenreFromMovie(movieId: number, genreId: number)
}
