import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Header from "../Header";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AlertForm from "./alertForms";
import * as API from '../../services/api'

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
 const validate = values => {
    const errors = {};
    if (!values.floating_username) {
      errors.floating_username = 'Requerido';
    } else if (values.floating_username.includes('@')) {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.floating_username)) {
            errors.floating_username = 'Formato de email inválido'
        }
    }
  
    if (!values.floating_password) {
      errors.floating_password = 'Requerido';
    } 

    return errors;
  };

function Login() {
    const [user, setUser] = useState({});
    const [codeHttp, setCodeHttp] = useState(0);

    // Initialize values of formik
    const formik = useFormik({
        initialValues: {
            floating_username: '',
            floating_password: '',
        },
        validate,
        onSubmit: values => {
            API.loginUser(values).then((data) => {
                setUser(data.dataJSON);
                setCodeHttp(data.status);
                if (data.status === 200) {
                    localStorage.setItem('user', JSON.stringify(data.dataJSON));
                }
            });
        },
    });

    if(localStorage.length > 0) {
        return(
            <>
                <Navigate to={`/${JSON.parse(localStorage.getItem('user')).username}`} />
            </>
        )
    }

    return (
        <>
            <Header />
            {codeHttp === 400 ? <AlertForm type="Error:" value="El usuario o la contraseña son incorrectas. Intentelo de nuevo" /> : null}
            {codeHttp === 200 ? <Navigate to={`/${user.username}`} /> : null}
            <div className="w-screen h-screen flex justify-between items-center">
                <div className="w-full h-full flex justify-center items-center flex-col">
                    <h1 className="text-white text-5xl m-5">Inicie sesión en su cuenta</h1>
                    <form onSubmit={formik.handleSubmit} className="m-5 w-2/5">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" id="floating_username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={formik.handleChange} value={formik.values.floating_username} />
                            <label htmlFor="floating_username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre de usuario o email</label>
                            {formik.errors.floating_username ? <div className="text-red-700">{formik.errors.floating_username}</div> : null}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={formik.handleChange} value={formik.values.floating_password} type="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            {formik.errors.floating_password ? <div className="text-red-700">{formik.errors.floating_password}</div> : null}
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar sesión</button>
                    </form>

                </div>

                <div className="bg-bg-login w-1/4 h-full flex justify-center items-center flex-col">
                    <h2 className="text-white text-2xl">¿No tiene todavía una cuenta?</h2>
                    <Link to={`/signup`}>
                        <button className="m-5 border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Regístrese</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login;