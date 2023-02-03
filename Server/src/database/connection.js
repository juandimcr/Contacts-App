// Imports
const mysql = require('mysql2');
require('dotenv').config();

// Connect to DB
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSW,
    database: process.env.DB_DATABASE,
    debug: false
});

pool.getConnection((err, connection) => {
    if (err)   
        throw err;
    if (connection)
        connection.release();
    console.log('DB Connected');
});

const promisePool = pool.promise();

// Export
module.exports = promisePool;