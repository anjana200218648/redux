import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import EmptyCart from '../assets/Images/emptycart.png';
import { addToCart } from '../redux/cardSlice'; // Ensure the correct path to your slice

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.card); // Access the cart slice from Redux

  // Function to handle incrementing quantity
  const incrementQuantity = (product) => {
    // Increase the quantity of the selected product
    dispatch(addToCart({
      ...product,
      quantity: product.quantity + 1,
    }));
  };

  // Function to handle decrementing quantity
  const decrementQuantity = (product) => {
    // Decrease the quantity only if it's greater than 1
    if (product.quantity > 1) {
      dispatch(addToCart({
        ...product,
        quantity: product.quantity - 1,
      }));
    }
  };

  // Function to handle product removal
  const removeProduct = (productId) => {
    // Dispatch a remove action here (you need to implement it in your slice)
    // Example: dispatch(removeFromCart(productId));
  };

  return (
    <div className="container mx-auto py-10 px-5">
      {cart?.products?.length > 0 ? (
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Your Cart Items</h2>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <div className="flex items-center justify-between border-b p-4 bg-gray-100">
              <p className="text-lg font-medium text-gray-700">PRODUCTS</p>
              <div className="flex space-x-4">
                <p className="text-lg font-medium text-gray-700">PRICE</p>
                <p className="text-lg font-medium text-gray-700">QUANTITY</p>
                <p className="text-lg font-medium text-gray-700">SUBTOTAL</p>
                <p className="text-lg font-medium text-gray-700">REMOVE</p>
              </div>
            </div>
            <div>
              {cart.products.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-4">
                    <img src={product.image} alt={product.name} className="h-16 w-16 object-cover rounded" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                    </div>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <p className="text-gray-700">Rs.{product.price}</p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decrementQuantity(product)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <p className="text-gray-700">{product.quantity}</p>
                      <button
                        onClick={() => incrementQuantity(product)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gray-700">Rs{(product.quantity * product.price).toFixed(2)}</p>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between py-4 bg-gray-100 rounded-b-lg">
            <p className="text-lg font-semibold text-gray-700">Total Quantity: {cart.totalQuantity}</p>
            <p className="text-lg font-semibold text-gray-700">Total Price: Rs.{cart.totalPrice.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCart} alt="Empty cart illustration" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
