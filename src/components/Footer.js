import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Lubbenta</h2>
                        <p className="text-gray-400">Your one-stop solution for buying and selling unique items.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                        <p className="text-gray-400 mb-2">Email: contact@auctionhouse.com</p>
                        <p className="text-gray-400">Phone: 123-456-7890</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    &copy; 2024 Auction House. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
