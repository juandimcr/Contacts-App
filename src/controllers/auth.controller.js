// Imports
const userService = require('../services/user.service');
const jwt = require('jsonwebtoken');
const encryptUtil = require('../util/bcrypt');
require('dotenv').config();

// Controllers
async function signIn(req, res) {
    const user = await userService.getUserByUsername(req.body);
    if(!user || user.length == 0 || ! await encryptUtil.comparePassword(user.password, req.body.password)) {
        res.status(400).json('Username or password are incorrect');
    } else {
        // Create access token and refresh token
        const accessToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY_AK, {
            expiresIn: 604800, // 7d
          });

        res.status(200).json({accessToken, id: user.id, username: user.username, 
                              fullname: user.fullname, profileImg: user.profileImg, email: user.email});
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