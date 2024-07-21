// Modal.js
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    const [view, setView] = useState('signup'); // Default to Sign Up view

    if (!isOpen) return null;

    const handleSignUp = () => setView('signup');
    const handleLogin = () => setView('login');

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-sm relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                {view === 'signup' ? (
                    <>
                        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
                        </form>
                        <p className="mt-4 text-sm text-gray-600">Already have an account? <button onClick={handleLogin} className="text-blue-600 hover:text-blue-700">Log In</button></p>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-bold mb-4">Log In</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" id="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Log In</button>
                        </form>
                        <p className="mt-4 text-sm text-gray-600">Forgot your password? <a href="#forgot-password" className="text-blue-600 hover:text-blue-700">Reset it</a></p>
                        <p className="mt-4 text-sm text-gray-600">Don't have an account? <button onClick={handleSignUp} className="text-blue-600 hover:text-blue-700">Sign Up</button></p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
