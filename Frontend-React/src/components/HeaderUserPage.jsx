import { Link } from "react-router-dom";

function HeaderUserPage(props) {
    const handleClick = () => {
        localStorage.clear();
    }

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to={`/${props.username}`} className="flex items-center">
                        <img src="https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-contact-book-glyph-icon-vector-png-image_1885929.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Contacts App</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link to={'/'}>
                            <button onClick={e => handleClick()} className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Cerrar sesión</button>
                        </Link>
                        <Link to={'/contacts/add'}>
                            <button className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Añadir un nuevo contacto</button>
                        </Link>
                    </div>
                </div>
        </nav>
        </header >
    )
}

export default HeaderUserPage;