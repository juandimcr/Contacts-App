import HeaderUserPage from "../HeaderUserPage";
import { useFormik } from "formik";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import * as API from "../../services/api"

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

function NewContactForm(props) {
    const [msg, setMsg] = useState('');

    // Formik
    const formik = useFormik({
        initialValues: {
            nombre: '',
            imagen: '',
            tipo: '',
            ciudad: '',
            pais: '',
            phone: '',
        },
        validate,
        onSubmit: values => {
            API.createContact(values, props.user.id, props.user.accessToken).then((data) => {
                setMsg(data)
            })
        },
    });
    
    if (msg !== '') {
        return(
            <Navigate to={`/${props.user.username}`} />
        )
    }

    return (
        <>
            <HeaderUserPage username={props.user.username} />
            <div className="w-screen h-screen flex justify-between items-center">
                <div className="w-full h-full flex justify-center items-center flex-col">
                    <h1 className="text-white text-5xl m-5">Añada un nuevo contacto a su agenda</h1>

                    <form onSubmit={formik.handleSubmit} className="m-5 w-2/5">
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
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Añadir</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default NewContactForm;