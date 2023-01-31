// Import
const bcrypt = require('bcryptjs');

// Functions 
async function encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const passwordEncrypt = await bcrypt.hash(password, salt);
    return passwordEncrypt;
}

async function comparePassword(passwordDB, passwordForm) {
    return await bcrypt.compare(passwordForm, passwordDB);
}

// Exports
module.exports = { encryptPassword, comparePassword };