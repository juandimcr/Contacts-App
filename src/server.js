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

// Export server
module.exports = server;