import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-24 bg-[url("/assets/images/more/15.jpg")] flex justify-center items-center gap-5'>
      <div>
        <img className='w-14 h-18' src="/assets/images/more/logo1.png" alt="logo" />
      </div>
      <div>
        <h1 className='text-5xl text-white'>Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default Navbar;