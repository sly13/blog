const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const cors = require("cors");
const multer = require("multer");

const db = require("./api/category");
const postDB = require("./api/post");

const storage = multer.diskStorage({
  destination: "./files",
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// app.get("/category2", (req, res) => {
//   console.log("here");

//   const connection = mysql.createConnection({
//     connectionLimit: 10,
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "blog",
//     port: 8889
//   });

//   const queryString = "Select * from category";
//   connection.query(queryString, (error, row) => {
//     if (error) {
//       console.log("Failed to query for categoty: " + error);
//       res.sendStatus(500);
//       res.end();
//       return;
//     }

//     res.json(row);
//     //res.status(200).json(results.rows);
//   });
// });

app.get("/category", db.getCategories);
app.get("/category/:id", db.getCategoryById);
app.post("/category", db.createCategory);
app.put("/category/:id", db.updateCategory);
app.delete("/category/:id", db.deleteCategory);

app.get("/post/category/:slug", postDB.getNewsByCategory);

app.get("/post", postDB.getPosts);
app.get("/post-trending", postDB.getTrendingPosts);
app.get("/post/:slug", postDB.getPostBySlug);
//app.post("/post", postDB.createPost);
app.post("/post", upload.single("file"), (req, res) => {
  const file = req.file;
  const meta = req.body;
});

app.put("/post/:id", postDB.updatePost);
app.delete("/post/:id", postDB.deletePost);

app.get("/post-more", postDB.getMoreNews);
app.get("/post-popular", postDB.getPopularNews);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
