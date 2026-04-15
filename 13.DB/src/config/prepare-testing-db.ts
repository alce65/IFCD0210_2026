import type { Pool } from 'pg';

export const prepareTestingDB = async (pool: Pool) => {
    // Setup code before each test, e.g., initialize the database connection and the GenresRepo instance
    await pool.query(`DROP TABLE IF EXISTS movies_genres CASCADE`);
    await pool.query('DROP TABLE IF EXISTS genres CASCADE');
    await pool.query(`DROP TABLE IF EXISTS movies CASCADE`);
    await pool.query(`
            CREATE TABLE genres (
                genre_id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
            )
        `);
    await pool.query(`
            CREATE TABLE movies (
                movie_id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                release_year INT NOT NULL,
                director VARCHAR(255) NOT NULL,
                duration INT NOT NULL,
                poster TEXT,
            rate DECIMAL(2, 1) NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
            );`);

    await pool.query(`
            CREATE TABLE movies_genres (
                movie_id INT NOT NULL REFERENCES movies(movie_id) ON DELETE CASCADE,
                genre_id INT NOT NULL REFERENCES genres(genre_id) ON DELETE CASCADE,
                PRIMARY KEY (movie_id, genre_id)
            )
        `);

    await pool.query(`
            INSERT INTO genres (name) VALUES
            ('Action'),
            ('Adventure')`);
    await pool.query(`
            INSERT INTO movies (title, release_year, director, duration, rate, poster) VALUES
                ('The Godfather', 1972, 'Francis Ford Coppola', 175, 9.2, 'https://www.imdb.com/title/tt0068646/'),
                ('The Dark Knight', 2008, 'Christopher Nolan', 152, 9.0, 'https://www.imdb.com/title/tt0468569/'),
                ('The Lord of the Rings: The Fellowship of the Ring', 2001, 'Peter Jackson', 178, 8.8, 'https://www.imdb.com/title/tt0120737/')
            `);

    await pool.query(`
            INSERT INTO movies_genres (movie_id, genre_id) VALUES
                (1, 1), -- The Godfather is Action
                (2, 1), -- The Dark Knight is Action
                (2, 2), -- The Dark Knight is Adventure
                (3, 2)  -- The Lord of the Rings: The Fellowship of the Ring is Adventure
            `);
};
