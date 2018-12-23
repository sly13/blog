// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "blog",
//   host: "localhost",
//   database: "blog",
//   password: "blog",
//   port: 5432
// });

var mysql = require("mysql");
const connection = mysql.createConnection({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog",
  port: 8889
});

module.exports = {
  connection
};
