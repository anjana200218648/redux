import React from 'react'
import { Categories } from '../assets/mockData'
import Mainimage from '../assets/Images/mainimage.jpg'
const Home = () => {
  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        <div className='w-full md:w-3/12'>
          <div>
            <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
            <ul className='space-y-4 bg-gray-100 p-3 border '>
            {Categories.map((category,index) =>(
              <li key={index}>
                <div></div>
                {category}
              </li>
            )) }
          </ul>
          </div>
         <div>
          <img src={Mainimage} alt="main image" />
         </div>
         <div>
          <p>Best Price In This</p>
          <h2>Sessoin</h2>
          <button>Shop Now</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Home
