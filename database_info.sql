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
    my_review TEXT NOT NULL
);

INSERT INTO cinema (imbd, type, title, poster, release_year, genre, director, actors, about, country, my_score, my_review)
VALUES (
    'tt1790864',
	'movie',
    'The Maze Runner',
	'https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg',
    2014,
    'Action, Mystery, Sci-Fi',
    'Wes Ball',
    'Dylan O Brien, Kaya Scodelario, Will Poulter',
    'Thomas is deposited in a community of boys after his memory is erased, soon learning they are all trapped in a maze that will require him to join forces with fellow runners for a shot at escape.',
    'United Kingdom, United States',
    8.4,
    'Great Movie'
);