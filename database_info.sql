CREATE TABLE movies (
	id SERIAL PRIMARY KEY,
	imbd VARCHAR(20),
    title VARCHAR(100) NOT NULL,
    release_year INT NOT NULL,
    genre VARCHAR(255) NOT NULL,
    director VARCHAR(100) NOT NULL,
    actors VARCHAR(255),
    about TEXT,
    country VARCHAR(100) NOT NULL,
    my_score DECIMAL(2,1) NOT NULL,
    my_review TEXT NOT NULL 
);

CREATE TABLE series (
	id SERIAL PRIMARY KEY,
	imbd VARCHAR(20),
    title VARCHAR(100) NOT NULL,
    release_year INT NOT NULL,
    genre VARCHAR(255) NOT NULL,
    seasons INT NOT NULL,
    director VARCHAR(100) NOT NULL,
    actors VARCHAR(255),
    about TEXT,
    country VARCHAR(100) NOT NULL,
    my_score DECIMAL(2,1) NOT NULL,
    my_review TEXT NOT NULL 
);

INSERT INTO movies (imbd, title, release_year, genre, director, actors, about, country, my_score, my_review)
VALUES (
    'tt1790864',
    'The Maze Runner',
    2014,
    'Action, Mystery, Sci-Fi',
    'Wes Ball',
    'Dylan O Brien, Kaya Scodelario, Will Poulter',
    'Thomas is deposited in a community of boys after his memory is erased, soon learning they are all trapped in a maze that will require him to join forces with fellow runners for a shot at escape.',
    'United Kingdom, United States',
    8.4,
    'Great Movie'
);