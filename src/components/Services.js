import React from 'react';

const Services = () => {
    return (
        <section className="py-16 bg-white" id="services">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">Online Auctions</h3>
                        <p className="text-gray-700">Bid on a wide variety of items from the comfort of your home.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">Live Auctions</h3>
                        <p className="text-gray-700">Join live auctions and experience the thrill of bidding in real-time.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">Appraisals</h3>
                        <p className="text-gray-700">Get your items appraised by our team of experts.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
