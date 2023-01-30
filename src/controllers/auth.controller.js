// Imports
const sequelize = require('../database/connection');

// Controllers
function signIn(req, res) {
    console.log(req.body);
    res.json('signin');
}

function signUp(req, res) {
    res.json('signup');
}

// Exports
module.exports = {signIn, signUp};