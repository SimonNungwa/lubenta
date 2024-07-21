import React from 'react';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-full md:w-1/4 p-4">
                        <div className="bg-gray-200 rounded-lg shadow-md p-6 h-full flex flex-col items-center justify-center">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-center">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-r-lg shadow-lg hover:bg-blue-700">
                &#10094;
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-l-lg shadow-lg hover:bg-blue-700">
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
