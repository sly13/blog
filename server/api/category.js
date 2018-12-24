const { connection } = require("../connect");

const getCategories = (request, response) => {
  const queryString = "SELECT * FROM category ORDER BY id ASC";
  connection.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results);
  });
};

const getCategoryById = (request, response) => {
  const id = parseInt(request.params.id);

  const queryString = `SELECT * FROM category WHERE id = ${id}`;
  connection.query(queryString, [id], (error, results) => {
    if (error) {
      console.log("Failed to query for categoty: " + error);
      response.sendStatus(500);
      response.end();
      return;
    }
    response.status(200).json(results);
  });
};

const createCategory = (request, response) => {
  const { name } = request.body;

  const queryString = "INSERT INTO category SET name = ?";
  connection.query(queryString, [name], (error, results) => {
    if (error) {
      console.log("Failed to query for categoty: " + error);
      response.sendStatus(500);
      response.end();
      return;
    }
    response.status(201).send(`Category added`);
  });
};

const updateCategory = (request, response) => {
  const id = parseInt(request.params.id);
  const { name } = request.body;

  const queryString = "UPDATE category SET name = ? WHERE id = ?";
  connection.query(queryString, [name, id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Category modified with ID: ${id}`);
  });
};

const deleteCategory = (request, response) => {
  const id = parseInt(request.params.id);
  const queryString = "DELETE FROM category WHERE id = ?";
  connection.query(queryString, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Category deleted with ID: ${id}`);
  });
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
