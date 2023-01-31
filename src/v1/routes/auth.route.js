// Imports
const router = require('express').Router();
const authController = require('../../controllers/auth.controller');

// Routes
router.post('/signin', authController.signIn);
router.post('/signup', authController.signUp);

// Export
module.exports = router;