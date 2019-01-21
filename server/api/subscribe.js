const { connection } = require("../connect");

const create = (request, response) => {
  const { email } = request.body;
  const queryString = "INSERT INTO subscriber SET email = ?";

  connection.query(queryString, [email], (error, results) => {
    if (error) {
      console.log("Failed to query for categoty: " + error);
      response.sendStatus(500);
      response.end();
      return;
    }
    response.status(200).send();
  });
};

module.exports = {
  create
};
