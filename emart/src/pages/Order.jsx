import React from 'react';
import {useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
  const navigate=useNavigate()
  if (!order) {
    return <div className="text-center text-gray-500">Loading...</div>; // or an appropriate message like "Order not found"
  }

  return (
    <div className="max-w-3xl mx-auto p-10 bg-gray-400 shadow-md rounded-lg mt-5 mb-4">
      <h2 className="text-2xl font-semibold text-center text-green-600 mb-4">Thank You for Your Order</h2>
      <p className="text-lg text-gray-700 text-center mb-6">Your order has been placed successfully. You will receive an email shortly.</p>
      
      <div className="border-t border-gray-300 pt-4 mt-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Order Summary</h3>
        <p className="text-lg text-gray-700 mb-4">Order Number: <span className="font-bold">{order.orderNumber}</span></p>
        
        <div className="border-t border-gray-300 pt-4 mt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery Address</h3>
          <p className="text-gray-700">{order.deliveryInformation.address}</p>
          <p className="text-gray-700">{order.deliveryInformation.town}</p>
          <p className="text-gray-700">{order.deliveryInformation.postalcode}</p>
        </div>
        
        <p className="text-xl font-semibold text-gray-800 mt-6">Total Price: <span className="text-green-600">Rs {order.totalPrice.toFixed(2)}</span></p>
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">Order Tracking</button>
        <button className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300" onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default Order;
