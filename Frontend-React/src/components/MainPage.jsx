import { Link } from "react-router-dom"
import mainPagePhoto from "../assets/bg-photo.svg";

function MainPage() {
    return (
        <>
            <div className="w-screen h-screen bg-bg-pattern flex justify-center items-center flex-wrap" >
                <div>
                    <img src={mainPagePhoto} alt="" />
                </div>
                <div className="flex flex-col items-center justify-between">
                    <h1 className="text-white text-4xl m-1">Bienvenido a tu Agenda de Contactos</h1>
                    <h2 className="text-white text-xl m-1">Para comenzar a guardar sus contactos registrese</h2>
                    <Link to={`/signup`}>
                        <button className="m-1 border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Registrar</button>
                    </Link>
                    <h2 className="text-white text-xl m-1">O si tienes ya una cuenta inicie sesión</h2>
                    <Link to={`/login`}>
                        <button className="m-1 border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Iniciar sesión</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MainPage