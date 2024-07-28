import React, { useState, useEffect } from 'react';

import artImage from '../assets/art.jpg';
import electronicsImage from '../assets/electronics.jpg';
import collectiblesImage from '../assets/collectibles.jpg';
import furnitureImage from '../assets/furniture.jpg';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(autoSlide);
  }, [items]); 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//   };

  if (!items || items.length === 0) {
    return <div>No items to display.</div>;
  }

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-1000" 
        style={{ transform: `translateX(${currentIndex * -100}%)` }} 
      >
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <div className="rounded-lg shadow-md p-6 h-full flex flex-col items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const categories = [
  { title: 'Art', description: 'Beautiful artworks and sculptures.', image: artImage },
  { title: 'Electronics', description: 'Latest gadgets and devices.', image: electronicsImage },
  { title: 'Collectibles', description: 'Rare and valuable items.', image: collectiblesImage },
  { title: 'Furniture', description: 'Stylish and functional furniture.', image: furnitureImage },
];

const App = () => {
  return (
    <div>
      <Carousel items={categories} />
    </div>
  );
};

export default App;