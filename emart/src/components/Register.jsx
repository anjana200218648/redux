import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div className=" flex items-center justify-center  from-purple-500 to-indigo-500 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <form>
        <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          <span className="text-sm text-gray-600">Already have an account?</span>
          <button
            className="ml-2 text-indigo-500 hover:underline"
            onClick={openLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register

