import debug from 'debug';
import { env } from './config/env.ts';
import { connectDB, connectSQLiteDB } from './config/db.ts';
import { GenresRepo } from './repo/genres.ts';
import { MoviesRepo } from './repo/movies.ts';
import { UsersRepo } from './repo/users.ts';

const log = debug(`${env.PROJECT_NAME}:index`);
log('Starting application...');

// Preparación

const pool = await connectDB();
const genresRepo = new GenresRepo(pool);
const moviesRepo = new MoviesRepo(pool);

const sqliteDB = connectSQLiteDB();

// Creación de tablas en SQLite

try {
    sqliteDB.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            handleName TEXT,
            password TEXT NOT NULL,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            avatar TEXT
        )
    `);
} catch (error) {
    log("Error creating SQLite tables:", error);
}

// Probando SQLITE

const usersRepo = new UsersRepo(sqliteDB);

const users = usersRepo.readAllUsers();
log('Users:', users);

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
