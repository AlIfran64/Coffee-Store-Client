import React from 'react';

const Banner = () => {
  return (
    <div className='w-full h-[400px] lg:h-[750px] bg-[url("/assets/images/more/3.png")] lg:bg-[center_top_-50px] bg-cover flex justify-center lg:justify-end items-center'>

      <div className='lg:mr-20'>
        <h1 className='text-white text-6xl mb-5 text-center lg:text-start'>Would you like a Cup of Delicious Coffee?</h1>
        <p className='text-white text-md mb-5 font-normal sub-heading leading-7 text-center lg:text-start'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>

        <div className='flex justify-center lg:block'>
          <button className='py-2 px-4 bg-[#E3B577] text-2xl cursor-pointer hover:bg-transparent hover:border-2 hover:border-white hover:text-white'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;