import debug from 'debug';
import { env } from './config/env.ts';
import { connectDB } from './config/db.ts';
import { GenresRepo } from './repo/genres.ts';

const log = debug(`${env.PROJECT_NAME}:index`);
log('Starting application...');

// Preparación

const pool = await connectDB();
const genresRepo = new GenresRepo(pool);

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

// const g2 = await genresRepo.readGenreById(100);
// if (g2 === null) {
//     log('Genre with id 100 not found');
// } else {
//     log('Genre with id 100:', g2);
// }

// Tercer test: leer un género por id que no existe

try {
    const g2 = await genresRepo.readGenreById(100);
    log('Genre with id 100:', g2);
} catch (error) {
    log((error as Error).message);
}
