// Imports
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Connect to DB
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PSW, {
    host: 'localhost',
    dialect: 'mysql'
});

async function checkConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);s
    }
}

checkConnection();


// Export
module.exports = sequelize;