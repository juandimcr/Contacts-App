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

// Exports
module.exports = { insertUser };