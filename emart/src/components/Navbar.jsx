import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
       <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='text lg fron'>
            <Link to="/">Emart</Link>
        </div>
        <div>
            <form>
                <input type = "text" placeholder='Search Item'/>
                <IoSearchSharp />
            </form>
        </div>
        <div>
            <Link to="/cart">
            <FaShoppingCart />
            </Link>
            <button>
                Login | Register
            </button>
            <button>
            <FaRegCircleUser />
            </button>
        </div>
        

        </div> 
    </nav>
  )
}

export default Navbar
