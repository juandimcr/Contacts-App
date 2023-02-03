// Imports
const userService = require('../services/user.service');
const jwt = require('jsonwebtoken');
const encryptUtil = require('../util/bcrypt');
require('dotenv').config();

// Controllers
async function updateUser(req, res) {
    try {
        if (req.user !== req.params.id) {
            return res.status(404).json('User not found');
        }

        const userUpdated = await userService.updateUser(req.params.id, req.body);
        return res.status(200).json({ id: userUpdated.id, username: userUpdated.username, fullname: userUpdated.fullname, profileImg: userUpdated.profileImg, email: userUpdated.email });

    } catch (error) {
        console.error(error);
        if (error.sqlMessage.includes('@')) {
            return res.status(500).json('Email already exists');
        } else {
            return res.status(500).json('Username already exists');
        }
    }
}

// Exports
module.exports = { updateUser };