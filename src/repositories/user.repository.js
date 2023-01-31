// Imports
const pool = require('../database/connection');

// Functions
async function insertUser(user) {
    try {
        const userInserted = await pool.query('INSERT INTO USER SET ?', [user]);
        return user;
    } catch(err) {
        throw err;
    }
}

async function getUserByUsername(username) {
    try {
        const user = await pool.query('SELECT * FROM USER WHERE username=?', username);
        return user[0];
    } catch(error) {
        throw error;
    }
}

// Exports
module.exports = { insertUser, getUserByUsername };