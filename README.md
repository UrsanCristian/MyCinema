# MyCinema - Movie Review Website

Welcome to MyCinema, a personal project designed to allow users to explore, review, and share their thoughts on movies and series. This platform provides a space for movie enthusiasts to submit reviews, rate their favorite titles, and maintain a list of favorites for future reference.

## Features

- **Explore Movies and Series**: Users can browse a collection of movies and series, accessing detailed information such as genres, release years, and more.
- **Submit Reviews**: Share your opinions by submitting reviews and ratings for any movie or series.
- **Curate Favorites**: Easily mark titles as favorites to create your personalized list of top movies and series.
- **Edit and Delete Reviews**: Have second thoughts? Users can edit or delete their reviews anytime to keep their contributions accurate and current.

## Technologies

This project is built using a variety of technologies suited for web development:

- **Backend**: Node.js with Express.js framework for efficient server-side processing.
- **Database**: PostgreSQL for robust data storage and management.
- **Frontend**: EJS for dynamic content rendering, coupled with HTML/CSS for structure and design, and Vanilla JavaScript for interactivity.
- **External API**: Utilizes the OMDB API to fetch and display detailed information about movies and series.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- PostgreSQL
- An API key from [OMDB API](http://www.omdbapi.com/)

### Installation

1. **Clone the repository:**
    ```
    git clone https://github.com/UrsanCristian/MyCinema
    cd mycinema
    ```

2. **Install NPM packages:**
    ```
    npm install
    ```

3. **Set up the environment variables:**
   
   Create a `.env` file in the project root and add your PostgreSQL password and OMDB API key:
    ```
    DB_PASS=your_postgresql_password
    APIKEY=your_omdb_api_key
    ```

4. **Database Initialization:**

   Use the provided SQL script to set up your PostgreSQL database with the necessary tables.

5. **Start the application:**
    ```
    npm start
    ```
   Visit `http://localhost:3000` in your browser to start exploring.

## Usage

After setting up the project, you can explore its features by navigating through the website. Add new movie reviews, manage your favorites, and interact with the provided content.


## Acknowledgements

- [OMDB API](http://www.omdbapi.com/) for providing the movie data.
- Everyone who contributed to the Node.js and Express.js ecosystems.

## Notes

- At the moment website is not hosted. If you want to see the full functionality of the website you should run it on your localhost.

- If you want to avoid all the setup and get some info on how the website is structured you can take a look on the screenshots section of the README.

## Screenshots

#### Hero Section
![Screenshot of Home Page](https://i.imgur.com/PYjBumY.png "Hero Screenshot")

#### Favourites Section
![Screenshot of Home Page](https://i.imgur.com/pyWQl9F.png "Favourites Screenshot")

#### Favourites Animation and Effect on hover
![Screenshot of Home Page](https://i.imgur.com/kndzNbJ.png "Favourites Animation Screenshot")

#### New Review Form
![Screenshot of Home Page](https://i.imgur.com/WQCH6EN.png "New Review Form")

#### Post Example
![Screenshot of Home Page](https://i.imgur.com/qo2827B.png "Post")

#### Edit Post Form 
![Screenshot of Home Page](https://i.imgur.com/SiUlpWI.png "Edit Post Form")