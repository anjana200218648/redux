import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { addToCart } from '../redux/cardSlice';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  
  const handleAddToCard = (e, product) => {
    e.stopPropagation();
    e.preventDefault(); // Corrected the typo here
    dispatch(addToCart(product));
    alert("Product Added Successfully!"); // Fixed typo in the alert message
  };

  return (
    <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt=""
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>

      {/* Add to Cart Button */}
      <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
        group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-300"
        onClick={(e) => handleAddToCard(e, product)}
      >
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:block text-xs">Add to Cart</span>
      </div>
    </div>
  );
};

export default ProductCard;