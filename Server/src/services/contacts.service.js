// Imports
const { v4: uuidV4 } = require('uuid');
const Contacts = require('../model/Contacts');
const contactsRepository = require('../repositories/contacts.repository');

// Functions
async function getContactsByUser(userId, filter) {
    try {
        const contacts = await contactsRepository.getContactsByUser(userId, filter);
        return contacts[0];
    } catch (error) {
        throw error;
    }
}

async function getContactsById(id) {
    try {
        const contact = await contactsRepository.getContactById(id);
        return contact[0][0];
    } catch (error) {
        throw error;
    }
}

async function insertContact(body) {
    try {
        const contactId = uuidV4();
        const contact = new Contacts(contactId, body.phone, body.fullname, body.contactImg, body.type, body.city, body.country, body.user);
        return await contactsRepository.insertContact(contact);
    } catch (error) {
        throw error;
    }
}

async function updateContact(id, body) {
    try {
        const contact = new Contacts(body.id, body.phone, body.fullname, body.contactImg, body.type, body.city, body.country, body.user);
        const contactUpdated =  await contactsRepository.updateContact(contact);
        if (contactUpdated[0].affectedRows >= 1) return true;
        return false;
    } catch (error) {
        throw error;
    }
}

async function deleteContact(id) {
    try {
        await contactsRepository.deleteContact(id);
    } catch (error) {
        throw error;
    }
}

// Exports
module.exports = { getContactsByUser, getContactsById, insertContact, updateContact, deleteContact };