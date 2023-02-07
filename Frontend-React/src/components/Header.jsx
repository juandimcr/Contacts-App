import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to={`/`} className="flex items-center">
                            <img src="https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-contact-book-glyph-icon-vector-png-image_1885929.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Contacts App</span>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header