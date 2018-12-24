const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

var mysql = require("mysql");

const db = require("./api/category");
const postDB = require("./api/post");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/category2", (req, res) => {
  console.log("here");

  const connection = mysql.createConnection({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "blog",
    port: 8889
  });

  const queryString = "Select * from category";
  connection.query(queryString, (error, row) => {
    if (error) {
      console.log("Failed to query for categoty: " + error);
      res.sendStatus(500);
      res.end();
      return;
    }

    res.json(row);
    //res.status(200).json(results.rows);
  });
});

app.get("/category", db.getCategories);
app.get("/category/:id", db.getCategoryById);
app.post("/category", db.createCategory);
app.put("/category/:id", db.updateCategory);
app.delete("/category/:id", db.deleteCategory);

app.get("/post", postDB.getPosts);
app.get("/post/:id", postDB.getPostById);
app.post("/post", postDB.createPost);
app.put("/post/:id", postDB.updatePost);
app.delete("/post/:id", postDB.deletePost);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
