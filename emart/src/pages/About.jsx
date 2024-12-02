import React from 'react';
import { FaShoppingCart, FaUsers, FaPhoneAlt } from 'react-icons/fa'; 

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-center text-red-600 mb-12">About Us</h1>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to [Your Store Name], your number one source for [what your store offers]. 
            We’re dedicated to giving you the very best of [product category], with a focus on quality, customer service, and uniqueness.
          </p>
          <p className="text-lg text-gray-600">
            Founded in [Year], we’ve come a long way from our beginnings. When we first started out, our passion for [specific product category] drove us to start our own business. 
            We hope you enjoy our products as much as we enjoy offering them to you.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our mission is simple: to provide you with the best online shopping experience possible by offering premium-quality products at affordable prices.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-lg text-gray-600">
            To be the leading e-commerce destination for [product category] worldwide, where customers find everything they need with ease, exceptional service, and great value.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Values</h2>
        <div className="space-y-8">
          {/* Value 1 */}
          <div className="flex items-center space-x-4">
            <FaShoppingCart className="text-4xl text-red-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Customer First</h3>
              <p className="text-lg text-gray-600">
                Our customers are our top priority. We aim to offer the best shopping experience with a customer-first approach in everything we do.
              </p>
            </div>
          </div>

          {/* Value 2 */}
          <div className="flex items-center space-x-4">
            <FaUsers className="text-4xl text-red-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
              <p className="text-lg text-gray-600">
                We conduct business with honesty, fairness, and transparency. Integrity is at the core of everything we do.
              </p>
            </div>
          </div>

          {/* Value 3 */}
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-4xl text-red-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Customer Support</h3>
              <p className="text-lg text-gray-600">
                We are committed to providing excellent customer service. Our support team is here to assist you with any queries or issues you may have.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
            <p className="text-lg text-gray-600">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
            <p className="text-lg text-gray-600">Lead Developer</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Alice Johnson</h3>
            <p className="text-lg text-gray-600">Marketing Manager</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Have questions or need support? Reach out to us, and we’ll get back to you as soon as possible!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Address</h3>
            <p className="text-lg text-gray-600">158/4 Kaduwela Road, Malabe</p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-lg text-gray-600">+94 (74) 384 2846</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-lg text-gray-600">support@emartstore.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
