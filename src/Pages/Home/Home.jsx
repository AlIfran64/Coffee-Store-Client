import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import ProductCard from '../../Components/ProductCard/ProductCard';
import FollowUs from '../../Components/FollowUs/FollowUs';
import Features from '../../Components/Featues/Features';

const Home = () => {

  // load data
  const data = useLoaderData();

  const [coffees, setCoffees] = useState(data);


  return (
    <div
      className='w-full'

      // For double background
      style={{
        backgroundImage: `url('/assets/images/more/4.png'), url('/assets/images/more/5.png')`,
        backgroundPosition: 'left 350px, right 650px',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: '350px 350px, 400px 600px',
      }}
    >
      <div className='w-full bg-[#ECEAE3] py-10'>
        <Features></Features>
      </div>

      <div className='max-w-7xl mx-auto my-20'>

        <p className='text-center text-xl sub-heading'>--- Sip & Savor ---</p>
        <h1 className='text-5xl text-center my-3'>Our Popular Products</h1>

        <Link to={"/addCoffee"}>
          <div className='flex justify-center mt-5'>
            <button className='bg-[#E3B577] py-2 px-4 text-2xl text-white text-shadow-black border-2 border-[#331A15] rounded-md flex justify-center items-center gap-3 hover:bg-transparent hover:text-black' style={{ textShadow: '1px 1px 8px black' }}>Add Coffee <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
              <path d="M13.7143 11.4286V2.28571H2.28571V11.4286C2.28571 12.0348 2.52653 12.6162 2.95518 13.0448C3.38384 13.4735 3.96522 13.7143 4.57143 13.7143H11.4286C12.0348 13.7143 12.6162 13.4735 13.0448 13.0448C13.4735 12.6162 13.7143 12.0348 13.7143 11.4286ZM1.14286 0H18.2857C18.8919 0 19.4733 0.240816 19.902 0.66947C20.3306 1.09812 20.5714 1.67951 20.5714 2.28571V5.71429C20.5714 6.3205 20.3306 6.90188 19.902 7.33053C19.4733 7.75918 18.8919 8 18.2857 8H16V11.4286C16 12.641 15.5184 13.8038 14.6611 14.6611C13.8037 15.5184 12.641 16 11.4286 16H4.57143C3.35901 16 2.19625 15.5184 1.33894 14.6611C0.481631 13.8038 0 12.641 0 11.4286V1.14286C0 0.839753 0.120408 0.549062 0.334735 0.334735C0.549063 0.120408 0.839752 0 1.14286 0ZM16 2.28571V5.71429H18.2857V2.28571H16Z" fill="#331A15" />
            </svg></button>
          </div>
        </Link>

        {/* Product Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-5 mt-10">
          {
            coffees.map((singleProduct, index) => <ProductCard key={index} singleProduct={singleProduct} coffees={coffees} setCoffees={setCoffees}></ProductCard>)
          }
        </div>

        {/* Follow us */}
        <FollowUs></FollowUs>
      </div>
    </div>
  );
};

export default Home;