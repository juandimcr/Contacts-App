// Imports
const router = require('express').Router();
const userController = require('../../controllers/user.controller');
const authMiddleware = require('../../middlewares/auth.middleware');

// Routes
router.put('/:id', authMiddleware.isAuth, userController.updateUser);

// Export
module.exports = router;