// Imports
const server = require('./server');
require('dotenv').config();

// Start server
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`server running on port ${port}`);
});
