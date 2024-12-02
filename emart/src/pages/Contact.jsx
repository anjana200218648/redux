import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import MapImage from '../assets/Images/map.png'; // Map image path

const ContactUs = () => {
    return (
        <div className="bg-gray-50 py-16 px-6 md:px-16">
            <h1 className="text-5xl font-extrabold text-center text-red-600 mb-12">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
                    {/* Phone Number */}
                    <div className="flex items-center space-x-6">
                        <FaPhoneAlt className="text-4xl text-red-600" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Contact Number</h2>
                            <p className="text-lg text-gray-600">+94 (74) 284 3846</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center space-x-6">
                        <FaMapMarkerAlt className="text-4xl text-red-600" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Our Address</h2>
                            <p className="text-lg text-gray-600">158/4 Kaduwela Road, Malabe </p>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-center space-x-6">
                        <FaClock className="text-4xl text-red-600" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Opening Hours</h2>
                            <p className="text-lg text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                            <p className="text-lg text-gray-600">Sat: 10:00 AM - 4:00 PM</p>
                            <p className="text-lg text-gray-600">Sun: Closed</p>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h3>
                    <div className="relative">
                        <img src={MapImage} alt="Our Location" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                        <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-lg">
                            <span className="text-lg font-semibold text-red-600">You are here</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-16">
                <p className="text-lg text-gray-600">We are always here to help you. Feel free to contact us with any questions or concerns!</p>
            </div>
        </div>
    );
};

export default ContactUs;
