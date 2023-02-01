// Imports
const contactsService = require('../services/contacts.service');

// Functions
async function checkUserEqualContactUser(req, res, next) {
    const contact = await contactsService.getContactsById(req.params.id);
    if (contact.user !== req.user) {
        return res.status(404).json('Contact not found');
    }
    next();
}

// Exports
module.exports = { checkUserEqualContactUser };