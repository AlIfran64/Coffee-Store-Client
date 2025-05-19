import React from 'react';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {

  const data = useLoaderData();

  // Destructure
  const { name, photo, chef, supplier, category, taste, details } = data;

  return (
    <div className='bg-[url("/assets/images/more/11.png")] bg-no-repeat py-32'>


      {/* back btn */}
      <Link to={"/"}>
        <div className='max-w-7xl mx-auto mb-10'>
          <button className='bg-[#D2B48C] py-2 px-4 flex items-center gap-3 rounded-md text-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
              <path d="M16.5 8H1.5M1.5 8L8.25 14.75M1.5 8L8.25 1.25" stroke="#331A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Back to home</button>
        </div>
      </Link>


      <div className='bg-[#F4F3F0] max-w-7xl mx-auto rounded-md p-24 lg:flex justify-center items-center gap-10'>

        {/* left */}
        <div>
          <img className='w-96' src={photo} alt="" />
        </div>

        {/* right */}
        <div>
          <h1 className='text-5xl mb-5'>{category}</h1>
          <h1 className='text-2xl sub-heading'><b className='text-2xl sub-heading'>Name:</b> {name}</h1>
          <p className='text-2xl sub-heading'><b className='text-2xl sub-heading'>Chef:</b> {chef}</p>
          <p className='text-2xl sub-heading'><b className='text-2xl sub-heading'>Supplier:</b> {supplier}</p>
          <p className='text-2xl sub-heading'><b className='text-2xl sub-heading'>Taste:</b> {taste}</p>
          <p className='text-2xl sub-heading'><b className='text-2xl sub-heading'>Category:</b> {category}</p>
          <p className='text-2xl sub-heading'><b className='text-2xl sub-heading'>Details:</b> {details}</p>
        </div>

      </div>
    </div>
  );
};

export default CoffeeDetails;