import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { connectDB } from '../config/db.ts';
import { prepareTestingDB } from '../config/prepare-testing-db.ts';
import { MoviesRepo } from './movies.ts';

describe('MoviesRepo', async () => {
    const pool = await connectDB();
    const moviesRepo = new MoviesRepo(pool);

    beforeEach(async () => {
        await prepareTestingDB(pool);
    });
    
    afterEach(async () => {
        await pool.query(`DROP TABLE IF EXISTS movies_genres CASCADE`);
        await pool.query('DROP TABLE IF EXISTS genres CASCADE');
        await pool.query(`DROP TABLE IF EXISTS movies CASCADE`);
    });

    describe('Read operations', () => {
        it('should read all movies', async () => {
            const movies = await moviesRepo.readAllMovies();
            assert(Array.isArray(movies));
            assert.equal(movies.length, 3);
            assert.equal(movies[0]?.id, 1);
            assert.equal(movies[0]?.title, 'The Godfather');
        });

        it('should read all movies with genres', async () => {
            const movies = await moviesRepo.readAllMoviesWithGenres();
            assert(Array.isArray(movies));
            assert.equal(movies.length, 3);
            const film2 = movies[1];
            assert(film2);
            assert(Array.isArray(film2.genres));
            assert.equal(film2.genres?.length, 2);
            assert.deepEqual(film2.genres, [
                { id: 1, name: 'Action' },
                { id: 2, name: 'Adventure' },
            ]);
        });

        it('should find movies with genres by title', async () => {
            const movies = await moviesRepo.findMoviesWithGenresByTitle('Dark');
            assert(Array.isArray(movies));
            assert.equal(movies.length, 1);
            const film = movies[0];
            assert(film);
            assert.equal(film.title, 'The Dark Knight');
            assert(Array.isArray(film.genres));
            assert.equal(film.genres?.length, 2);
            assert.deepEqual(film.genres, [
                { id: 1, name: 'Action' },
                { id: 2, name: 'Adventure' },
            ]);
        });
    });
});
