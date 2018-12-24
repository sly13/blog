const { connection } = require("../connect");

const getPosts = (request, response) => {
  const queryString = "SELECT * FROM post ORDER BY id ASC";
  connection.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results);
  });
};

const getPostById = (request, response) => {
  const id = parseInt(request.params.id);
  const queryString = "SELECT * FROM post WHERE id = $1";

  connection.query(queryString, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createPost = (request, response) => {
  const { categoryId, title, subText, text } = request.body;
  const queryString = "INSERT INTO post SET ?";

  connection.query(
    queryString,
    [
      {
        categoryId,
        title,
        subText,
        text
      }
    ],
    (error, results) => {
      if (error) {
        console.log("Failed to query for categoty: " + error);
        response.sendStatus(500);
        response.end();
        return;
      }
      response.status(201).send(`Post added`);
    }
  );
};

const updatePost = (request, response) => {
  //todo проверка категории
  const id = parseInt(request.params.id);
  const { categoryId, title, subText, text } = request.body;

  console.log(id, categoryId, title, subText, text);
  const queryString = "UPDATE post SET ? WHERE id = ?";

  connection.query(
    queryString,
    [
      {
        categoryId,
        title,
        subText,
        text
      },
      id
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Post modified with ID: ${id}`);
    }
  );
};

const deletePost = (request, response) => {
  const id = parseInt(request.params.id);
  const queryString = "DELETE FROM post WHERE id = ?";

  connection.query(queryString, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Post deleted with ID: ${id}`);
  });
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};