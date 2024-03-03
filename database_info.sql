CREATE TABLE cinema (
	id SERIAL PRIMARY KEY,
	imbd VARCHAR(20),
	type VARCHAR(30),
    title VARCHAR(100) NOT NULL,
	poster TEXT,
    release_year INT NOT NULL,
    genre VARCHAR(255) NOT NULL,
    seasons INT,
    director VARCHAR(100) NOT NULL,
    actors VARCHAR(255),
    about TEXT,
    country VARCHAR(100) NOT NULL,
    my_score DECIMAL(2,1) NOT NULL,
    my_review TEXT NOT NULL,
    favourite BOOLEAN
);

INSERT INTO cinema (imbd, type, title, poster, release_year, genre, director, actors, about, country, my_score, my_review, favourite)
VALUES (
    'tt1392170',
	'movie',
    'The Hunger Games',
	'https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg',
    2012,
    'Action, Mystery, Sci-Fi',
    'Gary Ross',
    'Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth',
    'Katniss Everdeen voluntarily takes her younger sister`s place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.',
    'United States',
    8.2,
    'Great Movie',
    'true'
);