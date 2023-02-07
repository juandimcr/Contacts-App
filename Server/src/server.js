// Imports
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Routes
const V1AuthRoutes = require('./v1/routes/auth.route');
const V1UserRoutes = require('./v1/routes/user.route');
const V1ContactRoutes = require('./v1/routes/contacts.route');

// Config server
const server = express();
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

// Routes v1
server.get('/', (req, res) => {
    res.json('Bienvenido a la API de contactos');
});
server.use('/api/v1/auth', V1AuthRoutes);
server.use('/api/v1/contacts', V1ContactRoutes);
server.use('/api/v1/user', V1UserRoutes);

// Export server
module.exports = server;