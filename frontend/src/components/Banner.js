import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    const handleStartBidding = () => {
        navigate('/live-auctions');
    };

    return (
        <section className="bg-yellow-600 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to Lubbenta</h1>
                <p className="text-xl mb-8">Your one-stop solution for buying and selling unique items.</p>
                <button
                    className="bg-white text-black py-2 px-4 rounded"
                    onClick={handleStartBidding}
                >
                    Start Bidding
                </button>
            </div>
        </section>
    );
};

export default Banner;
