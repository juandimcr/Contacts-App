import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <div className="w-screen h-screen flex justify-between items-center">
                <div>
                
                </div>
                
                <div className="bg-bg-login w-1/4 h-full flex justify-center items-center flex-col">
                    <h2 className="text-white text-2xl">¿No tiene todavía una cuenta?</h2>
                    <Link to={`/signup`}>
                        <button className="m-5 border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Registrese</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login