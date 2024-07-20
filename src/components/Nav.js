import React from 'react';

const Nav = () => {
    return (
        <nav className="bg-blue-600 text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Lubbenta</div>
                <ul className="flex space-x-4">
                    <li><a href="#about" className="hover:text-gray-300">About</a></li>
                    <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                    <li>
                        <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-blue-200">
                            Sign Up
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
