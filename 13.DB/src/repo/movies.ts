import debug from 'debug';
import { env } from '../config/env.ts';
import type { Pool } from 'pg';
import type { Movie } from '../entities/movie.ts';

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

    // readMoviesWithGenresById(id: number)

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

    // createMovie(movie: Omit<Movie, 'id'>)

    // updateMovie(id: number, movie: Omit<Movie, 'id'>)

    // deleteMovie(id: number)

    // addGenreToMovie(movieId: number, genreId: number)

    // removeGenreFromMovie(movieId: number, genreId: number)
}
