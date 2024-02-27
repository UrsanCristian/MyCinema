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

async function getMoviesOrSeries(type) {
  const dataQuery = await db.query(`SELECT * FROM ${type}`);
  posts = dataQuery.rows;
}

app.get("/", async (req, res) => {
  await getMoviesOrSeries(selectedType);
  res.render("index.ejs", { posts: posts });
});

app.post("/type", async (req, res) => {
    selectedType = req.body.selector;
    console.log(selectedType);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});