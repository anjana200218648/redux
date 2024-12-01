import React, { useEffect } from 'react';
import { Categories, mockData } from '../assets/mockData';
import Mainimage from '../assets/Images/mainimage.jpg';
import SecondImage from '../assets/Images/main3.jpg';
import threadImage from '../assets/Images/main5.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InfoSection from '../components/InfoSection';
import CategorySection from '../components/CategorySection';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import Shop from './Shop';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const dispatch = useDispatch()
  const Products = useSelector(state =>state.product)
  useEffect(()=>{
    dispatch(setProducts(mockData))
  },[])

  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        <div className='w-full md:w-3/12 px-2'>
          <div className='bg-red-600 text-white text-xs font-bold px-4 py-4'>SHOP BY CATEGORIES</div>
          <ul className='space-y-4 bg-gray-100 p-2 border'>
            {Categories.map((category, index) => (
              <li key={index} className='flex items-center text-sm font-medium'>
                <div className='w-2 h-2 border border-red-500 rounded-full mr-4'></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-9/12 mt-8 md:mt-0 h-65 relative mx-auto'> 
          <Slider {...settings}>
            <div>
              <img src={Mainimage} alt="Main" className="w-full h-65 object-cover" />
            </div>
            <div>
              <img src={SecondImage} alt="Second" className="w-full h-65 object-cover" />
            </div>
            <div>
              <img src={threadImage} alt="Thread" className="w-full h-65 object-cover" />
            </div>
          </Slider>
          </div>
      </div>
      <div className='pt-50'>
      <InfoSection/>
      </div>
      <div>
        <CategorySection/>
      </div>
      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
        <div className='grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
          {Products.products.slice(0,5).map(((product)=>
          (
            <ProductCard product={product}/>
          )))}
        </div>
      </div>
    </div>
    <Shop/>
    </div>
  );
};

export default Home;