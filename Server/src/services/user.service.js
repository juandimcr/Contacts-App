// Imports
const { v4: uuidV4 } = require('uuid');
const User = require('../model/User');
const encryptUtil = require('../util/bcrypt');
const userRepository = require('../repositories/user.repository');

// Functions
async function register(body) {
    try {
        const user_id = uuidV4();
        const passwordEncrypt = await encryptUtil.encryptPassword(body.password);
        const user = new User(user_id, body.username, passwordEncrypt, body.fullname, body.profileImg, body.email);
        return await userRepository.insertUser(user);
    } catch (error) {
        throw error;
    }
}

async function getUserByUsername(body) {
    try {
	    const user = await userRepository.getUserByUsername(body.username);
        return user[0];
    } catch (error) {
        throw error;
    }
}

async function getUserById(id) {
    try {
	    const user = await userRepository.getUserById(id);
        return user[0];
    } catch (error) {
        throw error;
    }
}

async function updateUser(userId, body) {
    try {  
        const encryptPassword = await encryptUtil.encryptPassword(body.password);
        const user = new User(userId, body.username, encryptPassword, body.fullname, body.profileImg, body.email);
        const userUpdated = await userRepository.updateUser(user);
        return userUpdated;
    } catch(error) {
        throw error;
    }
}

// Exports
module.exports = { register, getUserByUsername, getUserById, updateUser };