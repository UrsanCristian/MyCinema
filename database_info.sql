CREATE TABLE movies (
	id SERIAL PRIMARY KEY,
	imbd VARCHAR(20),
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