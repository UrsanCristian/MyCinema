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
  if (type==='movies') {
    dataQuery = await db.query(`SELECT * FROM cinema WHERE type=$1`, ['movie']);
    favouritesQuery = await db.query(`SELECT * FROM cinema WHERE type=$1 and favourite=$2`, ['movie','true']);
  } else {
    dataQuery = await db.query(`SELECT * FROM cinema WHERE type=$1`, ['series']);
    favouritesQuery = await db.query(`SELECT * FROM cinema WHERE type=$1 and favourite=$2`, ['series','true']);
  };
  posts = dataQuery.rows;
  favourites= favouritesQuery.rows.slice(0,5);
}

app.get("/", async (req, res) => {
  await getMoviesOrSeries(selectedType);
  res.render("index.ejs", { posts: posts, type: selectedType, favourites: favourites });
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
  if (req.body.favourite === 'true') {
    addFav = req.body.favourite;
  } else {
    addFav = 'false';
  }
  try {
    if (addTitle.slice(0, 2) === 'tt' && addTitle.length === 9 ) {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&i=${addTitle}`)
      const data = response.data
      if (data.Response === 'True') {
        
      } else {
        alert("Wrong Title/IMbd ID. Please introduce the full name/id of the movie and check for misspellings.")
      } 
    } else {
      
    }
  } catch (error) {
    alert("Failed to Get Movie/Series Data. Please try again later.")
  }

  res.redirect("/")
});

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});