// Imports
const router = require('express').Router();
const contactsController = require('../../controllers/contacts.controller');
const authMiddleware = require('../../middlewares/auth.middleware');

// Routes
router.get('/user/:id', authMiddleware.isAuth, contactsController.getContactsByUsername);
router.get('/:id', authMiddleware.isAuth, contactsController.getContactById);
router.post('/', authMiddleware.isAuth, contactsController.insertNewContact);
router.put('/:id', authMiddleware.isAuth, contactsController.updateContact);
router.delete('/:id', authMiddleware.isAuth, contactsController.deleteContact);

// Export
module.exports = router;