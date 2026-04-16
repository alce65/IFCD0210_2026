import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { connectDB } from '../config/db.ts';
import { prepareTestingDB } from '../config/prepare-testing-db.ts';
import { MoviesRepo } from './movies.ts';
import { SqlError } from '../errors/sql-error.ts';
import type { Movie } from '../entities/movie.ts';

// AAA - Arrange, Act, Assert

describe('MoviesRepo', async () => {
    const pool = await connectDB();
    const moviesRepo = new MoviesRepo(pool);

    beforeEach(async () => {
        // Arrange - prepare the database with test data
        await prepareTestingDB(pool);
    });

    afterEach(async () => {
        await pool.query(`DROP TABLE IF EXISTS movies_genres CASCADE`);
        await pool.query('DROP TABLE IF EXISTS genres CASCADE');
        await pool.query(`DROP TABLE IF EXISTS movies CASCADE`);
    });

    describe('Read operations', () => {
        it('should read all movies', async () => {
            // Arrange - done in beforeEach
            const TABLE_LENGTH = 3;
            // Act
            const movies = await moviesRepo.readAllMovies();
            // Assert
            assert(Array.isArray(movies));
            assert.strictEqual(movies.length, TABLE_LENGTH);
            assert.strictEqual(movies[0]?.id, 1);
            // En Jest, Vitest y otros frameworks de testing,
            // expect(movies[0]?.title).toBe('The Godfather');
            assert.strictEqual(movies[0]?.title, 'The Godfather');
        });

        it('should read all movies with genres', async () => {
            const movies = await moviesRepo.readAllMoviesWithGenres();
            assert(Array.isArray(movies));
            assert.strictEqual(movies.length, 3);
            assert(movies[1]);
            assert(Array.isArray(movies[1].genres));
            assert.strictEqual(movies[1].genres?.length, 2);
            assert.deepEqual(movies[1].genres, [
                { id: 1, name: 'Action' },
                { id: 2, name: 'Adventure' },
            ]);
        });

        it('should find movies with genres by title', async () => {
            const movies = await moviesRepo.findMoviesWithGenresByTitle('Dark');
            assert(Array.isArray(movies));
            assert.strictEqual(movies.length, 1);
            assert(movies[0]);
            assert.strictEqual(movies[0].title, 'The Dark Knight');
            assert(Array.isArray(movies[0].genres));
            assert.strictEqual(movies[0].genres?.length, 2);
            assert.deepEqual(movies[0].genres, [
                { id: 1, name: 'Action' },
                { id: 2, name: 'Adventure' },
            ]);
        });

        it('should return an empty array if no movies match the title', async () => {
            const movies =
                await moviesRepo.findMoviesWithGenresByTitle(
                    'Nonexistent Movie',
                );
            assert(Array.isArray(movies));
            assert.strictEqual(movies.length, 0);
        });

        it('should read movies with genres by id', async () => {
            const movie = await moviesRepo.readMoviesWithGenresById(2);
            assert(movie);
            assert.strictEqual(movie.id, 2);
            assert.strictEqual(movie.title, 'The Dark Knight');
            assert(Array.isArray(movie.genres));
            assert.strictEqual(movie.genres?.length, 2);
            assert.deepEqual(movie.genres, [
                { id: 1, name: 'Action' },
                { id: 2, name: 'Adventure' },
            ]);
        });

        it('should throw an error if movie with id does not exist', async () => {
            try {
                await moviesRepo.readMoviesWithGenresById(10);
                assert.fail('Expected error was not thrown');
            } catch (error) {
                assert(error instanceof Error);
                assert.strictEqual(error.message, 'Genre with id 10 not found');
                // En Jest, Vitest y otros frameworks de testing,
                // expect(error).toBeInstanceOf(SqlError);
                assert(error instanceof SqlError);
                assert.strictEqual((error as SqlError).code, 'NOT_FOUND');
                assert.strictEqual(
                    (error as SqlError).sqlState,
                    'SELECT_FAILED',
                );
            }
        });
    });

    describe('Create operations', () => {
        it('should create a new movie', async () => {
            // Arrange
            const newMovie: Omit<Movie, 'id'> = {
                title: 'Inception',
                year: 2010,
                director: 'Christopher Nolan',
                duration: 148,
                poster: 'https://www.imdb.com/title/tt1375666/',
                rate: 8.8,
                genres: [
                    { id: 1, name: 'Action' },
                    { id: 2, name: 'Adventure' },
                ],
            };
            // Act
            const createdMovie = await moviesRepo.createMovie(newMovie);
            // Assert
            assert(createdMovie);
            assert.strictEqual(createdMovie.id, 4); // Assuming it's the next ID in sequence
            assert.strictEqual(createdMovie.title, newMovie.title);
            assert.strictEqual(createdMovie.year, newMovie.year);
            assert.strictEqual(createdMovie.director, newMovie.director);
            assert.strictEqual(createdMovie.duration, newMovie.duration);
            assert.strictEqual(createdMovie.poster, newMovie.poster);
            assert.strictEqual(createdMovie.rate, newMovie.rate);
            // Test that genres returned in the create operation,
            assert(Array.isArray(createdMovie.genres));
            assert.strictEqual(createdMovie.genres?.length, 2);
            assert.deepEqual(createdMovie.genres, newMovie.genres);
        });
    });

    describe('Update operations', () => {
        it('should update an existing movie', async () => {
            // Arrange
            const updatedData: Partial<Omit<Movie, 'id' | 'genres'>> = {
                // title: 'The Dark Knight Rises',
                year: 2012, // inicialmente 2008
                // director: 'Christopher Nolan',
                // duration: 165,
                // poster: 'https://www.imdb.com/title/tt1345836/',
                // rate: 8.4,
            };
            // Act
            const updatedMovie = await moviesRepo.updateMovie(2, updatedData);
            // Assert
            assert(updatedMovie);
            assert.strictEqual(updatedMovie.id, 2);
            assert.strictEqual(updatedMovie.title, 'The Dark Knight'); // No se actualiza
            assert.strictEqual(updatedMovie.year, updatedData.year); // Se actualiza
            assert.strictEqual(updatedMovie.director, 'Christopher Nolan'); // No se actualiza
            assert.strictEqual(updatedMovie.duration, 152); // No se actualiza
            assert.strictEqual(
                updatedMovie.poster,
                'https://www.imdb.com/title/tt0468569/',
            ); // No se actualiza
            assert.strictEqual(updatedMovie.rate, 9.0); // No se actualiza
        });

        it('should throw an error if movie with id does not exist', async () => {
            try {
                await moviesRepo.updateMovie(10, {
                    title: 'Nonexistent Movie',
                });
                assert.fail('Expected error was not thrown');
            } catch (error) {
                assert(error instanceof SqlError);
                assert.strictEqual((error as SqlError).code, 'NOT_FOUND');
                assert.strictEqual(
                    (error as SqlError).sqlState,
                    'UPDATE_FAILED',
                );
            }
        });

        it('should add genre to a movie', async () => {
            // Act
            const result = await moviesRepo.toggleMovieGenres(1, 2);
            // Assert
            assert(result);
            assert.strictEqual(result.movie_id, 1);
            assert.strictEqual(result.genre_id, 2);
            assert.strictEqual(result.isDeleted, false);
        });

        it('should remove genre from a movie', async () => {
            // Act
            const result = await moviesRepo.toggleMovieGenres(2, 1);
            // Assert
            assert(result);
            assert.strictEqual(result.movie_id, 2);
            assert.strictEqual(result.genre_id, 1);
            assert.strictEqual(result.isDeleted, true);
        });
    });

    describe('Delete operations', () => {
        it('should delete an existing movie', async () => {
            // Act
            const deletedMovie = await moviesRepo.deleteMovie(3);
            // Assert
            assert(deletedMovie);
            assert.strictEqual(deletedMovie.id, 3);
            assert.strictEqual(
                deletedMovie.title,
                'The Lord of the Rings: The Fellowship of the Ring',
            );
            // Verify that the movie is actually deleted
            try {
                await moviesRepo.readMoviesWithGenresById(3);
                assert.fail('Expected error was not thrown');
            } catch (error) {
                assert(error instanceof SqlError);
                assert.strictEqual(error.message, 'Genre with id 3 not found');
                assert.strictEqual((error as SqlError).code, 'NOT_FOUND');
                assert.strictEqual(
                    (error as SqlError).sqlState,
                    'SELECT_FAILED',
                );
            }
        });

        it('should throw an error if movie with id does not exist', async () => {
            try {
                await moviesRepo.deleteMovie(10);
                assert.fail('Expected error was not thrown');
            } catch (error) {
                assert(error instanceof SqlError);
                assert.strictEqual((error as SqlError).code, 'NOT_FOUND');
                assert.strictEqual(
                    (error as SqlError).sqlState,
                    'DELETE_FAILED',
                );
            }
        });
    });
});
