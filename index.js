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

let moviesTableName = "movies";
let seriesTableName = "series";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let selectedType = moviesTableName;

let posts;

async function getMoviesOrSeries(type) {
  const dataQuery = await db.query(`SELECT * FROM ${type}`);
  posts = dataQuery.rows;
}

app.get("/", async (req, res) => {
  await getMoviesOrSeries(selectedType);
  res.render("index.ejs", { posts: posts });
});

app.post("/movies", async (req, res) => {
    selectedType = moviesTableName;
});

app.post("/series", async (req, res) => {
    selectedType = seriesTableName;
});

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});