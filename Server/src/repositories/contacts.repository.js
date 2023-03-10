// Imports
const pool = require('../database/connection');

// Functions
async function getContactsByUser(userId, filter) {
    try {
        let contacts;
        if (filter === undefined) {
            contacts = await pool.query('SELECT * FROM CONTACTS WHERE user=?', [userId]);
        } else {
            contacts = await pool.query('SELECT * FROM CONTACTS WHERE user=? AND type=?', [userId, filter]);
        }
        return contacts;
    } catch(err) {
        throw err;
    }
}

async function getContactById(id) {
    try {
        const contact = await pool.query('SELECT * FROM CONTACTS WHERE id=?', [id]);
        return contact;
    } catch(error) {
        throw error;
    }
}

async function insertContact(contact) {
    try {
        const contactInserted = await pool.query('INSERT INTO CONTACTS SET ?', [contact]);
        return contact;
    } catch(err) {
        throw err;
    }
}

async function updateContact(contact) {
    try {
        const contactUpdated = await pool.query('UPDATE CONTACTS SET ? WHERE id = ?', [contact, contact.id]);
        return contactUpdated;
    } catch(err) {
        throw err;
    }
}

async function deleteContact(id) {
    try {
        await pool.query('DELETE FROM CONTACTS WHERE id=?', [id]);
    } catch(err) {
        throw err;
    }
}

// Exports
module.exports = { getContactsByUser, getContactById, insertContact, updateContact, deleteContact };