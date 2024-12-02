import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({setOrder}) => {
  const [activeSection, setActiveSection] = useState("billing");
  const [paymentMethod, setPaymentMethod] = useState(""); // Track selected payment method
  const cart = useSelector((state) => state.card); // Access cart data from Redux store
  const navigats = useNavigate()
  

  const [deliveryInfo,setDeliveryInfo] = useState({
      address:'',
      town:'',
      postalcode: '' 
  })
  const handleOrder=()=>{
    const newOrder ={
        products:cart.products,
        orderNumber:"123456",
        deliveryInformation:deliveryInfo,
        totalPrice:cart.totalPrice
    }
    setOrder(newOrder)
    navigats('/order-conformation')
  }

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? "" : section));
  };

  return (
    <div className="container mx-auto py-8 px-4 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Forms */}
        <div className="lg:w-2/3 w-full space-y-6">
          {/* Billing Information */}
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3
              className="text-lg font-semibold mb-4 cursor-pointer"
              onClick={() => toggleSection("billing")}
            >
              Billing Information
            </h3>
            {activeSection === "billing" && (
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border p-2 rounded mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-2 rounded mb-4"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border p-2 rounded"
                />
              </form>
            )}
          </div>

          {/* Delivery Information */}
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3
              className="text-lg font-semibold mb-4 cursor-pointer"
              onClick={() => toggleSection("delivery")}
            >
              Delivery Information
            </h3>
            {activeSection === "delivery" && (
              <form>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border p-2 rounded mb-4"
                  onClick={(e)=>setDeliveryInfo({...deliveryInfo, address: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Town"
                  className="w-full border p-2 rounded mb-4"
                  onClick={(e)=>setDeliveryInfo({...deliveryInfo, town: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border p-2 rounded"
                  onClick={(e)=>setDeliveryInfo({...deliveryInfo, postalcode: e.target.value})}
                />
              </form>
            )}
          </div>

          {/* Payment Method */}
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3
              className="text-lg font-semibold mb-4 cursor-pointer"
              onClick={() => toggleSection("payment")}
            >
              Payment Method
            </h3>
            {activeSection === "payment" && (
              <form>
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    className="mr-2"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="cod" className="flex items-center">
                    <span className="material-icons text-gray-600 mr-2">
                      local_shipping
                    </span>
                    Cash on Delivery
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="debit"
                    name="paymentMethod"
                    value="debitCard"
                    className="mr-2"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="debit" className="flex items-center">
                    <span className="material-icons text-gray-600 mr-2">
                      credit_card
                    </span>
                    Debit Card
                  </label>
                </div>

                {/* Show Card Form only when Debit Card is selected */}
                {paymentMethod === "debitCard" && (
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full border p-2 rounded mb-4"
                    />
                    <input
                      type="text"
                      placeholder="Bank"
                      className="w-full border p-2 rounded mb-4"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full border p-2 rounded"
                    />
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:w-1/3 w-full bg-gray-100 p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div>
            {cart.products.length > 0 ? (
              cart.products.map((product, index) => (
                <div key={index} className="flex gap-4 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{product.name}</h4>
                    <p>
                      Rs {product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No items in the cart</p>
            )}
          </div>
          <div className="flex justify-between font-semibold mt-4">
            <span>Total Price</span>
            <span>Rs {cart.totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 mt-4"
          onClick={handleOrder}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
