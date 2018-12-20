const Pool = require("pg").Pool;
const pool = new Pool({
  user: "blog",
  host: "localhost",
  database: "blog",
  password: "blog",
  port: 5432
});

export default pool;
