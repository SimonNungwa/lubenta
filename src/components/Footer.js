import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-yellow-600 text-white space-y-12 align-space-between pt-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold">Lubbenta</h2>
                        <p>Your one-stop solution for buying and selling unique items.</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                        <p>Email: contact@auctionhouse.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold mb-2">Follow Us</h2>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white m-0 text-center  w-full">
                &copy; 2024 Auction House. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
