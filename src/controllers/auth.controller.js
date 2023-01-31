// Imports
const userService = require('../services/user.service');
const jwt = require('jsonwebtoken');
const encryptUtil = require('../util/bcrypt');
require('dotenv').config();

// Controllers
async function signIn(req, res) {
    const user = await userService.login(req.body);
    if(user.length == 0 || ! await encryptUtil.comparePassword(user[0].password, req.body.password)) {
        res.status(400).json('Username or password are incorrect');
    } else {
        // Create access token and refresh token
        const accessToken = jwt.sign({ id: user[0].id }, process.env.SECRET_KEY_AK, {
            expiresIn: 900, // 15min
          });
        
        const refreshToken = jwt.sign({ id: user[0].id }, process.env.SECRET_KEY_AK, {
            expiresIn: 2592000, // 30d
        });

        res.status(200).json({accessToken, refreshToken, username: user[0].username, 
                              fullname: user[0].fullname, profileImg: user[0].profileImg, email: user[0].email});
    }
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