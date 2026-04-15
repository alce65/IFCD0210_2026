import debug from 'debug';
import { env } from './config/env.ts';
import { connectDB } from './config/db.ts';
import { GenresRepo } from './repo/genres.ts';
import { MoviesRepo } from './repo/movies.ts';

const log = debug(`${env.PROJECT_NAME}:index`);
log('Starting application...');

// Preparación

const pool = await connectDB();
const genresRepo = new GenresRepo(pool);
const moviesRepo = new MoviesRepo(pool);

// Primer test

const g = await genresRepo.readAllGenres();
log('Genres:', g);


// Segundo test: leer un género por id

try {
    const g2 = await genresRepo.readGenreById(10);
    log('Genre with id 10:', g2);
} catch (error) {
    log((error as Error).message);
}

const movies = await moviesRepo.readAllMoviesWithGenres();
log('Movies with genres:', movies[0]);
