const pg = require('pg');

const pool = pg.Pool({
    user : process.env.DBUSER,
    host : process.env.DBHOST,
    database : process.env.DBNAME,
    password : process.env.DBPASS,
    port : 5432
});

module.exports = pool;