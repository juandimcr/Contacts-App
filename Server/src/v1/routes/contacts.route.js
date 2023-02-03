// Imports
const router = require('express').Router();
const contactsController = require('../../controllers/contacts.controller');
const authMiddleware = require('../../middlewares/auth.middleware');
const contactMiddleware = require('../../middlewares/contact.middleware');

// Routes
router.get('/user/:userId', authMiddleware.isAuth, contactsController.getContactsByUsername);
router.get('/:id', [authMiddleware.isAuth, contactMiddleware.checkUserEqualContactUser], contactsController.getContactById);
router.post('/', authMiddleware.isAuth, contactsController.insertNewContact);
router.put('/:id', [authMiddleware.isAuth, contactMiddleware.checkUserEqualContactUser], contactsController.updateContact);
router.delete('/:id', [authMiddleware.isAuth, contactMiddleware.checkUserEqualContactUser], contactsController.deleteContact);

// Export
module.exports = router;