// Imports
const userService = require('../services/user.service');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Controllers
function signIn(req, res) {
    userService.login(req.body);
    res.json('signin');
}

async function signUp(req, res) {
    try {
        const userSignedUp = await userService.register(req.body);
        res.status(200).json('User has been signed up');
    } catch (error) {
        if(error.sqlMessage.includes('@')) {
            res.status(500).json('Email already exists');
        } else {
            res.status(500).json('Username already exists')
        }
    }
}

// Exports
module.exports = {signIn, signUp};