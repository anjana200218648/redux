import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <TbTruckDelivery className='text-3xl text-red-600' />,
      title: 'Free Delivery',
      description: 'Get your orders delivered with no charges',
    },
    {
      icon: <BiSupport className='text-3xl text-red-600' />,
      title: 'Support 24/7',
      description: 'We are here to assist you anytime',
    },
    {
      icon: <FaMoneyBill1Wave className='text-3xl text-red-600' />,
      title: '100% Money Back',
      description: 'Full refund if you are not satisfied',
    },
    {
      icon: <RiSecurePaymentLine className='text-3xl text-red-600' />,
      title: 'Payment Secure',
      description: 'Your payment information is safe with us',
    },
    {
      icon: <TbRosetteDiscountCheckFilled className='text-3xl text-red-600' />,
      title: 'Discount',
      description: 'Enjoy the best prices on our products',
    },
  ];

  return (
    <div className='bg-white pb-8 pt-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {infoItems.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'
          >
            {item.icon}
            <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
            <p className='mt-2 text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
