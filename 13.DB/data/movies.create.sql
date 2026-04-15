DROP TABLE IF EXISTS movies_genres CASCADE;
DROP TABLE IF EXISTS genres CASCADE;
DROP TABLE IF EXISTS movies CASCADE;

CREATE TABLE genres (
	genre_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE movies (
  movie_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  release_year INT NOT NULL,
  director VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  poster TEXT,
  rate DECIMAL(2, 1) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE movies_genres (
  movie_id INT NOT NULL REFERENCES movies(movie_id) ON DELETE CASCADE,
  genre_id INT NOT NULL REFERENCES genres(genre_id) ON DELETE CASCADE,
  PRIMARY KEY (movie_id, genre_id)
);