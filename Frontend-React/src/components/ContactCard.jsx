import { useState, useEffect } from "react";
import ModalEditForm from "./forms/ModalEditForm";
import * as API from "../services/api";

function ContactCard(props) {


    const handleClick = (contactId) => {
        API.deleteContact(props.user.accessToken, contactId).then(window.location.reload());
    }

    return (
        <>
            <div className="flex flex-col items-center justify-between m-6 bg-gray-900 h-3/5 w-1/5 rounded-xl">
                <img src={props.contact.contactImg} alt="Imagen del contacto" className="rounded-xl w-52 m-4" />
                <h2 className="text-white uppercase p-2 bg-gray-700 rounded-xl">{props.contact.fullname}</h2>
                <p className="text-white uppercase p-2 bg-gray-700 rounded-xl">{props.contact.phone}</p>
                <p className="text-white p-2 bg-gray-700 rounded-xl">TIPO: {props.contact.type}</p>
                <p className="text-white uppercase p-2 bg-gray-700 rounded-xl">{props.contact.city}</p>
                <p className="text-white uppercase m-2 p-2 bg-gray-700 rounded-xl">{props.contact.country}</p>
                <div className="flex items-center justify-center">
                    <ModalEditForm contact={props.contact} user={props.user} />
                    <button onClick={e => handleClick(props.contact.id)} className="m-2 p-2 rounded-xl bg-red-900 text-white hover:bg-red-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Eliminar</button>
                </div>
            </div>
        </>
    )
}

export default ContactCard;