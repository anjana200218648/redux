import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import EmptyCart from '../assets/Images/emptycart.png';
import { addToCart, decreaseQuantity, increaseQuantity, removeFormCart } from '../redux/cardSlice'; 
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';
import { useNavigate } from "react-router"


const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.card); 
   
  const deliveryCost = 500; 
  const[address,setAddress] = useState( "1234, Example Street, City, Country"); 
  
   const [isModelOpen,setIsModelOpen]= useState(false)
  const navigate = useNavigate()
  

  
 

  return (
    <div className='container mx-auto py-8 min-h-96 px-16 lg:px-24'>
      {cart?.products?.length > 0 ? (
        <div className='flex flex-wrap'>
          {/* Cart Items Section */}
          <div className='md:w-2/3 w-full'>
            <h2 className='text-2xl font-semibold mb-4'>Your Cart Items</h2>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
              <div className='w-full'>
                <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                  <p>PRODUCTS</p>
                  <div className='flex space-x-8'>
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                    <p>SUBTOTAL</p>
                    <p>REMOVE</p>
                  </div>
                </div>
                <div>
                  {cart.products.map((product) => (
                    <div key={product.id} className='flex items-center justify-between p-3 border-b'>
                      <div className='md:flex items-center space-x-4'>
                        <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                        <div className='flex-1 ml-4'>
                          <h3 className='text-lg font-semibold'>{product.name}</h3>
                        </div>
                      </div>
                      <div className='flex space-x-12 items-center'>
                        <p>Rs.{product.price}</p>
                        <div className="flex items-center justify-center border">
                          <button onClick={() => dispatch(decreaseQuantity(product.id))} className='text-xl font-bold px-1.5 border-r'>-</button>
                          <p className='text-xl px-2'>{product.quantity}</p>
                          <button onClick={() => dispatch(increaseQuantity(product.id))} className='text-xl px-1 border-l'>+</button>
                        </div>
                        <p>Rs{(product.quantity * product.price).toFixed(2)}</p>
                        <button onClick={() => dispatch(removeFormCart(product.id))} className='text-red-500 hover:text-red-700'>
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Add spacing between Cart Items and Order Summary */}
          <div className='md:w-1/3 w-full md:ml-auto mt-8 md:mt-0 md:pl-10'>
            <div className='bg-gray-100 p-4 rounded shadow-md'>
              <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
              <div className='flex justify-between mb-2'>
                <p>Total Items:</p>
                <p>{cart.totalQuantity}</p>
              </div>
              <div className='flex justify-between mb-2'>
                <p>Delivery:</p>
                <p>Rs.{deliveryCost.toFixed(2)}</p>
              </div>
              <div className='mb-2'>
                <p>Delivery Address:</p>
                <p className='text-sm text-gray-600'>{address}</p>
                <button className='text-blue-500 hover:underline mt-1 ml-1 ' onClick={()=>setIsModelOpen(true)}>
                  Change address
                </button>
              </div>
              <div className='flex justify-between mb-4'>
                <p>Total Price:</p>
                <p>Rs.{(cart.totalPrice + deliveryCost).toFixed(2)}</p>
              </div>
              <button className='w-full bg-red-600 text-white py-2 rounded hover:bg-blue-700' onClick={()=>navigate('/checkout')} >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <Modal isModelOpen={isModelOpen}
          setIsModelOpen={setIsModelOpen}>
            <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen}/>
          </Modal>
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
