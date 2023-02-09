import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import * as API from '../services/api'
import HeaderUserPage from "./HeaderUserPage";
import ContactCard from "./ContactCard";

function UserPage() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [contacts, setContacts] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        API.getContactsOfUser(user.id, user.accessToken).then(setContacts);
    }, [])

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
                            <ContactCard contact={contact} user={user} />
                        </>
                    ))}
                </div>
            )}
        </>
    )
}

export default UserPage;