import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import * as API from '../../services/api'

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
    const errors = {};
    if (!values.nombre) {
        errors.nombre = 'Requerido';
    }

    if (!values.imagen) {
        errors.imagen = 'Requerido';
    }

    if (!values.tipo) {
        errors.tipo = 'Requerido';
    } else if (values.tipo !== "FAMILIAR" && values.tipo !== "AMIGO" && values.tipo !== "TRABAJO" && values.tipo !== "OTROS") {
        errors.tipo = 'Tipo erróneo, solo se puede poner FAMILIAR, AMIGO, TRABAJO, OTRO'
    }

    if (!values.ciudad) {
        errors.ciudad = 'Requerido';
    }

    if (!values.pais) {
        errors.pais = 'Requerido';
    }

    if (!values.phone) {
        errors.phone = 'Requerido';
    }

    return errors;
};

function ModalEditForm(props) {
    const [showModal, setShowModal] = React.useState(false);
    const [msg, setMsg] = useState('');

    // Formik
    const formik = useFormik({
        initialValues: {
            nombre: props.contact.fullname,
            imagen: props.contact.contactImg,
            tipo: props.contact.type,
            ciudad: props.contact.city,
            pais: props.contact.country,
            phone: props.contact.phone,
        },
        validate,
        onSubmit: values => {
            API.editContact(values, props.user.id, props.user.accessToken, props.contact.id).then(setMsg);
            window.location.reload();
        },
    });

    return (
        <>
            <button
                className="m-2 p-2 rounded-xl bg-blue-800 text-white hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Editar
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center w-screen flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto max-w-3xl w-screen">
                            {/*content*/}
                            <div className="text-white border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-gray-900">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*Form*/}
                                <form onSubmit={formik.handleSubmit} className="m-5 w-4/5">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input onChange={formik.handleChange} value={formik.values.nombre} type="text" id="nombre" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label htmlFor="nombre" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre completo</label>
                                        {formik.errors.nombre ? <div className="text-red-700">{formik.errors.nombre}</div> : null}
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input onChange={formik.handleChange} value={formik.values.imagen} type="text" id="imagen" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label htmlFor="imagen" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Imagen</label>
                                        {formik.errors.imagen ? <div className="text-red-700">{formik.errors.imagen}</div> : null}
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input onChange={formik.handleChange} value={formik.values.tipo} type="text" id="tipo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label htmlFor="tipo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tipo (FAMILIAR, AMIGO, TRABAJO, OTROS)</label>
                                        {formik.errors.tipo ? <div className="text-red-700">{formik.errors.tipo}</div> : null}
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input onChange={formik.handleChange} value={formik.values.ciudad} type="text" id="ciudad" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label htmlFor="ciudad" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ciudad</label>
                                        {formik.errors.ciudad ? <div className="text-red-700">{formik.errors.ciudad}</div> : null}
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input onChange={formik.handleChange} value={formik.values.pais} type="text" id="pais" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label htmlFor="pais" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">País</label>
                                        {formik.errors.pais ? <div className="text-red-700">{formik.errors.pais}</div> : null}
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input onChange={formik.handleChange} value={formik.values.phone} type="text" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de telefono</label>
                                        {formik.errors.phone ? <div className="text-red-700">{formik.errors.phone}</div> : null}
                                    </div>
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar</button>
                                </form>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default ModalEditForm;