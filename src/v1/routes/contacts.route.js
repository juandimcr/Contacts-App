// Imports
const router = require('express').Router();
const contactsController = require('../../controllers/contacts.controller');

// Routes
router.get('/', contactsController.getContacts);
router.get('/:id', contactsController.getContactById);
router.post('/', contactsController.insertNewContact);
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);

// Export
module.exports = router;