import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { connectDB } from '../config/db.ts';
import { GenresRepo } from './genres.ts';
import type { SqlError } from '../errors/sql-error.ts';

describe('GenresRepo', async () => {
    const pool = await connectDB();
    const genresRepo = new GenresRepo(pool);

    beforeEach(async () => {
        // Setup code before each test, e.g., initialize the database connection and the GenresRepo instance
        await pool.query('DROP TABLE IF EXISTS genres');
        await pool.query(`
            CREATE TABLE genres (
                genre_id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
            )
        `);
        await pool.query(`
            INSERT INTO genres (name) VALUES
            ('Action'),
            ('Adventure')`);
    });

    afterEach(async () => {
        // Cleanup code after each test, e.g., close the database connection
        await pool.query('DROP TABLE IF EXISTS genres');
    });

    describe('Read operations', () => {
        it('should read all genres', async () => {
            // Test code for readAllGenres method
            // Example:
            const genres = await genresRepo.readAllGenres();
            assert(Array.isArray(genres));
            assert.strictEqual(genres.length, 2);
        });

        it('should read a genre by id', async () => {
            // Test code for readGenreById method
            // Example:
            const genre = await genresRepo.readGenreById(1);
            assert(genre);
            assert.strictEqual(genre.id, 1);
            assert.strictEqual(genre.name, 'Action');
        });

        it('should throw an error if genre not found', async () => {
            // Test code for readGenreById method when genre is not found
            // Example:
            try {
                await genresRepo.readGenreById(10);
                assert.fail('Expected an error to be thrown');
            } catch (error) {
                assert.strictEqual((error as SqlError).code, 'NOT_FOUND');
                assert.strictEqual((error as SqlError).sqlState, 'READ_FAILED');
            }
        });
    });

    describe('Create operation', () => {
        it('should create a new genre', async () => {
            // Test code for createGenre method
            // Example:
            const newGenre = await genresRepo.createGenre('Comedy');
            assert(newGenre);
            assert.strictEqual(newGenre.id, 3);
            assert.strictEqual(newGenre.name, 'Comedy');
        });
    });

    describe('Update operation', () => {
        it('should update an existing genre', async () => {
            // Test code for updateGenre method
            // Example:
            const updatedGenre = await genresRepo.updateGenre(1, 'Comedy');
            assert(updatedGenre);
            assert.strictEqual(updatedGenre.id, 1);
            assert.strictEqual(updatedGenre.name, 'Comedy');
        });

        it('should throw an error if genre not found', async () => {
            // Test code for updateGenre method when genre is not found
            // Example:
            try {
                await genresRepo.updateGenre(10, 'Comedy');
                assert.fail('Expected an error to be thrown');
            } catch (error) {
                assert.strictEqual((error as SqlError).code, 'NOT_FOUND');
                assert.strictEqual((error as SqlError).sqlState, 'UPDATE_FAILED');
            }
        });
    });

    describe('Delete operation', () => {
        // TDD: Test Driven Development - First write the test, then implement the deleteGenre method in GenresRepo
        it('should delete an existing genre', async () => {
            // Test code for deleteGenre method
            // Example:
            const deletedGenre = await genresRepo.deleteGenre(1);
            assert(deletedGenre);
            assert.strictEqual(deletedGenre.id, 1);
            assert.strictEqual(deletedGenre.name, 'Action');
            
            // Verify that the genre has been deleted
            const genres = await genresRepo.readAllGenres();
            assert.strictEqual(genres.length, 1);
            assert.strictEqual(genres[0]?.id, 2);
        });

        it('should throw an error if genre not found', async () => {
            // Test code for deleteGenre method when genre is not found
            // Example:
            try {
                await genresRepo.deleteGenre(10);
                assert.fail('Expected an error to be thrown');
            } catch (error) {
                assert.strictEqual((error as SqlError).code, 'NOT_FOUND');
                assert.strictEqual((error as SqlError).sqlState, 'DELETE_FAILED');
            }
        });
    });
});
