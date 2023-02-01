// Imports
const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');
require('dotenv').config();

// Functions
async function isAuth(req, res, next) {
    const bearer = req.header('authorization'); // Bearer token
    if (!bearer) {
        return res.status(403).json('No token provided')
    } 

    try {
        const token = bearer.substring(7, bearer.length);

        if (token === '') {
           return res.status(403).json('No token provided')
        }

	    const tokenDecoded = jwt.verify(token, process.env.SECRET_KEY_AK);

        const user = await userService.getUserById(tokenDecoded.id);
        if (!user) {
            return res.status(404).json('User not found')
        }

	    req.user = tokenDecoded.id; // Save the user id in the request
	    next();

    } catch (error) {
        return res.status(401).json('Unauthorized');
    }
}

// Exports
module.exports = { isAuth };