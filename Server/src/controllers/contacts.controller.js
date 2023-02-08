// Imports
const contactsService = require('../services/contacts.service');

// Controllers
async function getContactsByUser(req, res) {
    try {
        const contacts = await contactsService.getContactsByUser(req.params.userId, req.query.type);
        if (contacts.length > 0) {
            return res.status(200).json(contacts)
        } else {
            return res.status(404).json('Contacts not found')
        }
	    ;
    } catch (error) {
        console.error(error);
        return res.status(500).json('Server error')
    }
}

async function getContactById(req, res) {
    try {
        const contact = await contactsService.getContactsById(req.params.id);
        if (contact) {
            return res.status(200).json(contact);
        } else {
            return res.status(404).json('Contact not found');
        }
	    
    } catch (error) {
        console.error(error);
        return res.status(500).json('Server error')
    }
}

async function insertNewContact(req, res) {
    try {
	    const contact = await contactsService.insertContact(req.body);
	    return res.status(201).json('The contact has been created');
    } catch (error) {
        console.error(error);
        return res.status(500).json('Error');
    }
}

async function updateContact(req, res) {
    try {
	    const updatedOK = await contactsService.updateContact(req.params.id, req.body);
        if (updatedOK) {
            return res.status(200).json('Contact updated successfully');
        } else {
            return res.status(404).json('Contact not found');
        }
	    
    } catch (error) {
        console.error(error);
    }
}

async function deleteContact(req, res) {
    try {
	    await contactsService.deleteContact(req.params.id)
        return res.status(200).json('Contact has been removed successfully');
    } catch (error) {
        console.error(error);
        return res.status(500).json('Server error');
    }
}

// Exports
module.exports = { getContactsByUser, getContactById, insertNewContact, updateContact, deleteContact };