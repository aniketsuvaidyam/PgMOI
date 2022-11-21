import React from 'react'
import { Link } from 'react-router-dom'
import { HiUser } from "react-icons/hi";

const Navbar = ({ children }) => {

    const to = JSON.parse(sessionStorage.getItem('paylode'));

    return (
        <div>
            <header className="header  sticky  top-0     bg-white shadow-md flex items-center justify-between px-8 py-02">
                {/* logo */}
                <h1 className="w-3/12 text-blue-600 text-2xl">
                    <Link to="/home">MapOfIndia</Link>
                </h1>
                {/* navigation */}
                <nav className="nav font-semibold text-lg">
                    <ul className="flex items-center">






                        <li className="p-4 flex text-sm items-center border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">

                            <HiUser className=' mx-2 text-lg ' /> {to.username}
                        </li>

                    </ul>
                </nav>



            </header >
            <div className='w-full '>{children}</div>

        </div >
    )
}

export default Navbar
