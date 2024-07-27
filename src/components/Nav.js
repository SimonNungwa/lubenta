import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Modal from './Modal';
import Carousel from './Carousel';

const Nav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Example carousel items
    const categories = [
        { title: 'Art', description: 'Beautiful artworks and sculptures.' },
        { title: 'Electronics', description: 'Latest gadgets and devices.' },
        { title: 'Collectibles', description: 'Rare and valuable items.' },
        { title: 'Furniture', description: 'Stylish and functional furniture.' }
    ];

    return (
        <>
            <nav className="bg-yellow-600 text-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">Lubbenta</div>
                    <div className="hidden md:flex space-x-6 items-center">
                        <ul className="flex space-x-6 items-center">
                            <li><a href="#about" className="hover:text-gray-300">About</a></li>
                            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                        <SearchBar />
                        <button onClick={openModal} className="bg-white text-black py-2 px-4 rounded hover:bg-blue-200">
                            Sign Up
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={openModal} className="bg-white text-black py-2 px-4 rounded hover:bg-blue-200">
                            Menu
                        </button>
                    </div>
                </div>
            </nav>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <section className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-6">Explore Auction Categories</h2>
                    <Carousel items={categories} />
                </div>
            </section>
        </>
    );
};

export default Nav;
