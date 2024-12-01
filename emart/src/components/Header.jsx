import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  // Select the totalQuantity from the Redux store
  const totalQuantity = useSelector((state) => state.card?.totalQuantity || 0);

  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-5 justify-between">
        {/* Logo Section */}
        <div className="text-lg font-bold">
          <Link to="/">Emart</Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-4">
          <input
            type="text"
            placeholder="Search product here....."
            aria-label="Search products"
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-700 flex items-center justify-center rounded-r-full text-white">
            <IoIosSearch aria-label="Search" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>

        {/* User & Cart Section */}
        <div className="flex items-center gap-7">
          {/* User Icon */}
          <div className="text-3xl cursor-pointer" aria-label="User Profile">
            <FaRegCircleUser />
          </div>

          {/* Shopping Cart Icon */}
          <div className="text-2xl relative">
            <Link to="/cart">
              <FaShoppingCart aria-label="Shopping Cart" />
              {totalQuantity > 0 && (
                <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>

          {/* Login Button */}
          <div>
            <Link
              to="/login"
              className="bg-red-600 px-3 py-1 rounded-full text-white hover:bg-red-900"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
