const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Kr5n@78cai",
    host: "localhost",
    port: 5432,
    database: "perntodo"

});

module.exports = pool;