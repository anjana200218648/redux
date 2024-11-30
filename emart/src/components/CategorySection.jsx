import React from 'react';
import car from '../assets/Images/car.png';
import Jbl from '../assets/Images/JBL.png';
import PowerBank from '../assets/Images/PowerBank.png';
import Headphones from '../assets/Images/Headphones.png';
import laptop from '../assets/Images/laptop.png';
import watch from '../assets/Images/watch.png';

const CategorySection = () => {
  const categories = [
    { image: Jbl, title: 'SPEAKERS', productCount: 202 },
    { image: watch, title: 'SMART WATCHES', productCount: 278 },
    { image: PowerBank, title: 'POWER BANKS', productCount: 129 },
    { image: laptop, title: 'MACBOOK', productCount: 43 },
    { image: Headphones, title: 'HEADPHONES', productCount: 69 },
    { image: car, title: 'CAR ACCESSORIES', productCount: 112 },
  ];

  return (
    <div className="category-section grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="category-item relative flex flex-col items-center p-4 bg-transparent cursor-pointer transform transition duration-300 hover:scale-110"
        >
          {/* Blue Circle Background */}
          <div className="absolute w-36 h-36 bg-blue-500 rounded-full -z-10"></div>

          {/* Category Image */}
          <img
            src={category.image}
            alt={category.title}
            className="w-27 h-27 object-contain mb-4"
          />
          {/* Category Title */}
          <h3 className="text-center text-lg font-semibold">{category.title}</h3>
          {/* Product Count */}
          <p className="text-center text-gray-600">{category.productCount} products</p>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
