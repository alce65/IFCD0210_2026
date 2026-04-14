-- DROP DATABASE IF EXISTS movies_db;
-- CREATE DATABASE movies_db;
-- \c movies_db

-- Tabla de películas
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

-- Tabla de géneros
CREATE TABLE genres (
  genre_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de relación películas-géneros
CREATE TABLE movies_genres (
  movie_id INT NOT NULL REFERENCES movies(movie_id) ON DELETE CASCADE,
  genre_id INT NOT NULL REFERENCES genres(genre_id) ON DELETE CASCADE,
  PRIMARY KEY (movie_id, genre_id)
);

BEGIN;

INSERT INTO genres (name) VALUES
  ('Action'), ('Comedy'), ('Drama'), ('Horror'), ('Crime'), ('Sci-Fi'),
  ('Adventure'), ('Fantasy'), ('Animation'), ('Thriller'), ('Romance'), ('History');

INSERT INTO movies (title, release_year, director, duration, rate, poster) VALUES
  ('The Shawshank Redemption', 1994, 'Frank Darabont', 142, 9.3, 'https://www.imdb.com/title/tt0111161/'),
  ('The Godfather', 1972, 'Francis Ford Coppola', 175, 9.2, 'https://www.imdb.com/title/tt0068646/'),
  ('The Dark Knight', 2008, 'Christopher Nolan', 152, 9.0, 'https://www.imdb.com/title/tt0468569/'),
  ('The Lord of the Rings: The Return of the King', 2003, 'Peter Jackson', 201, 8.9, 'https://www.imdb.com/title/tt0167260/'),
  ('Pulp Fiction', 1994, 'Quentin Tarantino', 154, 8.9, 'https://www.imdb.com/title/tt0110912/'),
  ('Schindler''s List', 1993, 'Steven Spielberg', 195, 8.9, 'https://www.imdb.com/title/tt0108052/'),
  ('The Lord of the Rings: The Fellowship of the Ring', 2001, 'Peter Jackson', 178, 8.8, 'https://www.imdb.com/title/tt0120737/'),
  ('Forrest Gump', 1994, 'Robert Zemeckis', 142, 8.8, 'https://www.imdb.com/title/tt0109830/'),
  ('Inception', 2010, 'Christopher Nolan', 148, 8.7, 'https://www.imdb.com/title/tt1375666/'),
  ('The Lord of the Rings: The Two Towers', 2002, 'Peter Jackson', 179, 8.7, 'https://www.imdb.com/title/tt0167261/'),
  ('The Matrix', 1999, 'Lana Wachowski, Lilly Wachowski', 136, 8.7, 'https://www.imdb.com/title/tt0133093/'),
  ('Goodfellas', 1990, 'Martin Scorsese', 146, 8.7, 'https://www.imdb.com/title/tt0099685/'),
  ('One Flew Over the Cuckoo''s Nest', 1975, 'Milos Forman', 133, 8.7, 'https://www.imdb.com/title/tt0073486/'),
  ('Seven', 1995, 'David Fincher', 127, 8.6, 'https://www.imdb.com/title/tt0114369/'),
  ('The Silence of the Lambs', 1991, 'Jonathan Demme', 118, 8.6, 'https://www.imdb.com/title/tt0102926/'),
  ('The Usual Suspects', 1995, 'Bryan Singer', 106, 8.5, 'https://www.imdb.com/title/tt0114814/'),
  ('Léon: The Professional', 1994, 'Luc Besson', 110, 8.5, 'https://www.imdb.com/title/tt0110413/'),
  ('The Lion King', 1994, 'Roger Allers, Rob Minkoff', 88, 8.5, 'https://www.imdb.com/title/tt0110357/'),
  ('Terminator 2: Judgment Day', 1991, 'James Cameron', 137, 8.5, 'https://www.imdb.com/title/tt0103064/'),
  ('Saving Private Ryan', 1998, 'Steven Spielberg', 169, 8.5, 'https://www.imdb.com/title/tt0120815/'),
  ('The Green Mile', 1999, 'Frank Darabont', 189, 8.5, 'https://www.imdb.com/title/tt0120689/'),
  ('Back to the Future', 1985, 'Robert Zemeckis', 116, 8.5, 'https://www.imdb.com/title/tt0088763/'),
  ('American History X', 1998, 'Tony Kaye', 119, 8.5, 'https://www.imdb.com/title/tt0120586/'),
  ('The Pianist', 2002, 'Roman Polanski', 150, 8.5, 'https://www.imdb.com/title/tt0253474/'),
  ('Gladiator', 2000, 'Ridley Scott', 155, 8.5, 'https://www.imdb.com/title/tt0172495/'),
  ('The Departed', 2006, 'Martin Scorsese', 151, 8.5, 'https://www.imdb.com/title/tt0407887/'),
  ('The Prestige', 2006, 'Christopher Nolan', 130, 8.5, 'https://www.imdb.com/title/tt0482571/'),
  ('The Intouchables', 2011, 'Olivier Nakache, Éric Toledano', 112, 8.5, 'https://www.imdb.com/title/tt1675434/');

-- Relaciones películas-géneros
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Shawshank Redemption' AND g.name = 'Drama';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Shawshank Redemption' AND g.name = 'Crime';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Godfather' AND g.name = 'Drama';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Godfather' AND g.name = 'Crime';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Dark Knight' AND g.name = 'Action';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Dark Knight' AND g.name = 'Crime';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Lord of the Rings: The Return of the King' AND g.name = 'Adventure';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Lord of the Rings: The Return of the King' AND g.name = 'Fantasy';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Pulp Fiction' AND g.name = 'Crime';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Pulp Fiction' AND g.name = 'Drama';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Pulp Fiction' AND g.name = 'Thriller';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Schindler''s List' AND g.name = 'Drama';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Schindler''s List' AND g.name = 'History';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Lord of the Rings: The Fellowship of the Ring' AND g.name = 'Adventure';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Lord of the Rings: The Fellowship of the Ring' AND g.name = 'Fantasy';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Forrest Gump' AND g.name = 'Drama';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Forrest Gump' AND g.name = 'Romance';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Inception' AND g.name = 'Sci-Fi';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Inception' AND g.name = 'Thriller';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Lord of the Rings: The Two Towers' AND g.name = 'Fantasy';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Lord of the Rings: The Two Towers' AND g.name = 'Adventure';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Matrix' AND g.name = 'Sci-Fi';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Matrix' AND g.name = 'Action';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Goodfellas' AND g.name = 'Drama';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Goodfellas' AND g.name = 'Crime';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'One Flew Over the Cuckoo''s Nest' AND g.name = 'Drama';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Seven' AND g.name = 'Thriller';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Seven' AND g.name = 'Crime';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Silence of the Lambs' AND g.name = 'Thriller';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Silence of the Lambs' AND g.name = 'Crime';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Usual Suspects' AND g.name = 'Crime';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Usual Suspects' AND g.name = 'Comedy';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Léon: The Professional' AND g.name = 'Crime';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Lion King' AND g.name = 'Animation';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Terminator 2: Judgment Day' AND g.name = 'Sci-Fi';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Saving Private Ryan' AND g.name = 'Action';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Saving Private Ryan' AND g.name = 'History';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Green Mile' AND g.name = 'Drama';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Back to the Future' AND g.name = 'Sci-Fi';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Back to the Future' AND g.name = 'Comedy';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'American History X' AND g.name = 'History';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'American History X' AND g.name = 'Drama';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Pianist' AND g.name = 'Drama';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Gladiator' AND g.name = 'Action';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'Gladiator' AND g.name = 'History';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Departed' AND g.name = 'Thriller';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Prestige' AND g.name = 'Comedy';
INSERT INTO movies_genres (movie_id, genre_id) SELECT m.movie_id, g.genre_id FROM movies m, genres g WHERE m.title = 'The Intouchables' AND g.name = 'Crime';

COMMIT;

