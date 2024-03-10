import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config";

const app = express();
const port = 3000;

const key = process.env.apikey;
const db_pass = process.env.db_pass;
const db_name = "ChrisMovies";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: db_name,
  password: db_pass,
  port: 5432,
});

db.connect();

const defaultType = "movies";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let selectedType = defaultType;

let posts;
let favourites;

async function getMoviesOrSeries(type) {
  let dataQuery;
  let favouritesQuery;
  if (type === "movies") {
    dataQuery = await db.query(`SELECT * FROM cinema WHERE type=$1 ORDER BY my_score DESC`, ["movie"]);
    favouritesQuery = await db.query(
      `SELECT * FROM cinema WHERE type=$1 and favourite=$2 ORDER BY my_score DESC`,
      ["movie", "true"]
    );
  } else {
    dataQuery = await db.query(`SELECT * FROM cinema WHERE type=$1 ORDER BY my_score DESC`, [
      "series",
    ]);
    favouritesQuery = await db.query(
      `SELECT * FROM cinema WHERE type=$1 and favourite=$2 ORDER BY my_score DESC`,
      ["series", "true"]
    );
  }
  posts = dataQuery.rows;
  favourites = favouritesQuery.rows.slice(0, 5);
}

async function insertCinemaData(data, addScore, addReview, addFav) {
  if (data.Response === "True") {
    await db.query(
      "INSERT INTO cinema (imbd, type, title, poster, release_year, genre, director, actors, about, country, my_score, my_review, favourite) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
      [
        data.imdbID,
        data.Type,
        data.Title,
        data.Poster,
        data.Year.slice(0,4),
        data.Genre,
        data.Director,
        data.Actors,
        data.Plot,
        data.Country,
        addScore,
        addReview,
        addFav,
      ]
    );
  } else {
    console.error(
      "Wrong Title/IMbd ID. Please introduce the full name/id of the movie and check for misspellings."
    );
  }
}

async function getPost(id) {
  const postData = await db.query("SELECT * FROM cinema WHERE id=$1", [id]);
  return postData.rows[0];
}

app.get("/", async (req, res) => {
  await getMoviesOrSeries(selectedType);
  res.render("index.ejs", {
    posts: posts,
    type: selectedType,
    favourites: favourites,
  });
});

app.post("/type", async (req, res) => {
  selectedType = req.body.selector;
  console.log(selectedType);
  res.redirect("/");
});

app.post("/new", async (req, res) => {
  const addTitle = req.body.title;
  const addReview = req.body.review;
  const addScore = req.body.score;
  let addFav;
  if (req.body.favourite === "true") {
    addFav = req.body.favourite;
  } else {
    addFav = "false";
  }
  try {
    if (addTitle.slice(0, 2) === "tt" && addTitle.length === 9) {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${key}&i=${addTitle}`
      );
      const data = response.data;
      await insertCinemaData(data, addScore, addReview, addFav);
    } else {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${key}&t=${addTitle}`
      );
      const data = response.data;
      await insertCinemaData(data, addScore, addReview, addFav);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Failed to Get Movie/Series Data. Please try again later.");
  }

  res.redirect("/");
});

app.get("/edit", async (req, res) => {
  const postId = req.query.postId;
  const postData = await getPost(postId);
  res.render("editpost.ejs", {post: postData})
});

app.post("/edit", async (req, res) => {
  const postId = req.body.id;
  const editedGenre = req.body.genre;
  const editedDirector = req.body.director;
  const editedActors = req.body.actors;
  const editedAbout = req.body.about;
  const editedCountry = req.body.country;
  const editedReview = req.body.review;
  const editedScore = req.body.score;
  let editedFav;
  if (req.body.favourite === 'true') {
    editedFav = req.body.favourite;
  } else {
    editedFav = 'false';
  };
  try {
    await db.query('UPDATE cinema SET genre=$1, director=$2, actors=$3, about=$4, country=$5, my_review=$6, my_score=$7, favourite=$8 WHERE id=$9',
    [
      editedGenre,
      editedDirector,
      editedActors,
      editedAbout,
      editedCountry,
      editedReview,
      editedScore,
      editedFav,
      postId
    ])
  } catch (error) {
    console.log("Failed to update database");
    res.render("editpost.ejs", { error: "Failed to edit post. Please try again later"});
  };
  res.redirect("/");
});



app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
