// Imports
const router = require('express').Router();
const { signIn, signUp } = require('../../controllers/auth.controller');

// Routes
router.post('/signin', signIn);
router.post('/signup', signUp);

// Export
module.exports = router;