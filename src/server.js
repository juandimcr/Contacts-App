// Imports
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Config server
const server = express();
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

// Routes v1
server.get('/', (req, res) => {
    res.json('Bienvenido a la API de contactos');
});
server.use('/v1/auth', require('./v1/routes/auth.route'));
server.use('/v1/user', require('./v1/routes/user.route'));
server.use('/v1/contacts', require('./v1/routes/contacts.route'));

// Export server
module.exports = server;