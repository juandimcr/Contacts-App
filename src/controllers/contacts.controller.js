// Imports
const contactsService = require('../services/contacts.service');

// Controllers
async function getContactsByUsername(req, res) {
    try {
        const contacts = await contactsService.getContactsByUsername(req.params.userId);
        if (contacts.length > 0) {
            res.status(200).json(contacts)
        } else {
            res.status(404).json('Contacts not found')
        }
	    ;
    } catch (error) {
        console.error(error);
        res.status(500).json('Server error')
    }
}

async function getContactById(req, res) {
    try {
        const contact = await contactsService.getContactsById(req.params.id);
        if (contact) {
            res.status(200).json(contact);
        } else {
            res.status(404).json('Contact not found');
        }
	    
    } catch (error) {
        console.error(error);
    }
}

async function insertNewContact(req, res) {
    try {
	    const contact = await contactsService.insertContact(req.body);
	    res.status(201).json(contact);
    } catch (error) {
        console.error(error);
        res.status(500).json('Error');
    }
}

async function updateContact(req, res) {
    try {
	    const updatedOK = await contactsService.updateContact(req.params.id, req.body);
        if (updatedOK) {
            res.status(200).json('Contact updated successfully');
        } else {
            res.status(404).json('Contact not found');
        }
	    
    } catch (error) {
        console.error(error);
    }
}

async function deleteContact(req, res) {
    try {
	    await contactsService.deleteContact(req.params.id)
        res.status(200).json('Contact has been removed successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json('Server error');
    }
}

// Exports
module.exports = { getContactsByUsername, getContactById, insertNewContact, updateContact, deleteContact };