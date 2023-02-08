// URL for API
const apiURL = 'http://localhost:3000/api/v1';

export async function loginUser(user) {
    const userForLogin = {
        username: user.floating_username,
        password: user.floating_password,
    }

    const dataFetch = await fetch(`${apiURL}/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userForLogin),
    });
    const dataJSON = await dataFetch.json();
    return ({ status: dataFetch.status, dataJSON });
}

export async function registerUser(user) {
    const userForRegister = {
        username: user.floating_username,
        password: user.floating_password,
        fullname: user.floating_floating_fullname,
        profileImg: user.floating_floating_image,
        email: user.floating_email,
    }

    const dataFetch = await fetch(`${apiURL}/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userForRegister),
    });
    const dataJSON = await dataFetch.json();
    return ({ status: dataFetch.status, dataJSON });
}

export async function getContactsOfUser(userId, token) {
    const data = await fetch(`${apiURL}/contacts/user/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });

    const dataJSON = await data.json();
    return dataJSON;
}

export async function createContact(contact, userId, token) {
    const contactForCreate = {
        phone: contact.phone,
        fullname: contact.nombre,
        contactImg: contact.imagen,
        type: contact.tipo,
        city: contact.ciudad,
        country: contact.pais,
        user: userId,
    }
    const dataFetch = await fetch(`${apiURL}/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(contactForCreate),
    });
    const dataJSON = await dataFetch.json();
   
    return dataJSON;
}

export async function editContact(contact, userId, token, contactId) {
    const contactForEdit = {
        id: contactId,
        phone: contact.phone,
        fullname: contact.nombre,
        contactImg: contact.imagen,
        type: contact.tipo,
        city: contact.ciudad,
        country: contact.pais,
        user: userId,
    }
    const dataFetch = await fetch(`${apiURL}/contacts/${contactId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(contactForEdit),
    });
    const dataJSON = await dataFetch.json();
    return dataJSON;
}

export async function deleteContact(token, contactId) {
    const dataFetch = await fetch(`${apiURL}/contacts/${contactId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const dataJSON = await dataFetch.json();
    return dataJSON;
}