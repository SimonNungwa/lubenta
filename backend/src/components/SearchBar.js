import React from 'react';

const SearchBar = () => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search..."
                className="py-2 px-4 bg-white text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m-3.65 1.35A7.5 7.5 0 1117 10.5a7.5 7.5 0 01-3.65 6.35z"></path>
                </svg>
            </span>
        </div>
    );
};

export default SearchBar;
