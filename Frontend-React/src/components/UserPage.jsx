import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import * as API from '../services/api'
import HeaderUserPage from "./HeaderUserPage";
import ModalEditForm from "./forms/ModalEditForm";

function UserPage() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [contacts, setContacts] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        API.getContactsOfUser(user.id, user.accessToken).then(setContacts);
    }, [])
    
    const handleClick = (contactId) => {
        API.deleteContact(user.accessToken, contactId).then(window.location.reload());
    }

    if (user.username !== username) {
        return (
            <>
                <Navigate to={`/${user.username}`} />
            </>
        )
    }

    if(contacts === "The token has expired") {
        localStorage.clear();
        return (
            <>
                <Navigate to={`/`} />
            </>
        )
    }

    return (
        <>
            <HeaderUserPage username={user.username} />
            {contacts === 'Contacts not found' ? (
                <h1 className="text-white">Contacts not found</h1>
            ) : (
                <div className="flex items-start justify-center w-screen h-screen flex-wrap">
                    {contacts.map(contact => (
                        <>
                            <div key={contact.id} className="flex flex-col items-center justify-between m-6 bg-gray-900 h-3/5 w-1/5 rounded-xl">
                                <img src={contact.contactImg} alt="Imagen del contacto" className="rounded-xl w-52 m-4" />
                                <h2 className="text-white uppercase p-2 bg-gray-700 rounded-xl">{contact.fullname}</h2>
                                <p className="text-white uppercase p-2 bg-gray-700 rounded-xl">{contact.phone}</p>
                                <p className="text-white p-2 bg-gray-700 rounded-xl">TIPO: {contact.type}</p>
                                <p className="text-white uppercase p-2 bg-gray-700 rounded-xl">{contact.city}</p>
                                <p className="text-white uppercase m-2 p-2 bg-gray-700 rounded-xl">{contact.country}</p>
                                <div className="flex items-center justify-center">
                                    <ModalEditForm contact={contact} user={user} />
                                    <button onClick={e => handleClick(contact.id)} className="m-2 p-2 rounded-xl bg-red-900 text-white hover:bg-red-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Eliminar</button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            )}
        </>
    )
}

export default UserPage;