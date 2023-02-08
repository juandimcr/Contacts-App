// Imports
const userService = require('../services/user.service');
const jwt = require('jsonwebtoken');
const encryptUtil = require('../util/bcrypt');
require('dotenv').config();

// Controllers
async function signIn(req, res) {
    console.log(req.body)
    try {
        
        const user = await userService.getUserByUsername(req.body);
        if (!user || user.length == 0 || ! await encryptUtil.comparePassword(user.password, req.body.password)) {
            return res.status(400).json('Username or password are incorrect');
        } else {
            // Create access token and refresh token
            const accessToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY_AK, {
                expiresIn: 60, // 7d - 604800
            });

            return res.status(200).json({
                accessToken, id: user.id, username: user.username,
                fullname: user.fullname, profileImg: user.profileImg, email: user.email
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json('Server error');
    }
}

async function signUp(req, res) {
    try {
        const userSignedUp = await userService.register(req.body);
        return res.status(200).json('User has been signed up');
    } catch (error) {
        if (error.sqlMessage.includes('@')) {
            return res.status(500).json('Email already exists');
        } else {
            return res.status(500).json('Username already exists')
        }
    }
}

// Exports
module.exports = { signIn, signUp };