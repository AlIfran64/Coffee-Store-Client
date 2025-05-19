import React from 'react';

const Features = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex justify-between items-center p-5'>

        {/* Feature-1 */}
        <div>
          <img className='w-16 mb-2' src="/assets/images/icons/1.png" alt="image" />
          <h1 className='text-4xl mt-4'>Awesome Aroma</h1>
          <p className='sub-heading text-md mt-2'>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
        </div>

        {/* Feature-2 */}
        <div>
          <img className='w-16 mb-2' src="/assets/images/icons/2.png" alt="image" />
          <h1 className='text-4xl mt-4'>High Quality</h1>
          <p className='sub-heading text-md mt-2'>We served the coffee to you maintaining <br /> the best quality</p>
        </div>

        {/* Feature-3 */}
        <div>
          <img className='w-16 mb-2' src="/assets/images/icons/3.png" alt="image" />
          <h1 className='text-4xl mt-4'>Pure Grades</h1>
          <p className='sub-heading text-md mt-2'>The coffee is made of the green coffee <br /> beans which you will love</p>
        </div>

        {/* Feature-4 */}
        <div>
          <img className='w-16 mb-2' src="/assets/images/icons/4.png" alt="image" />
          <h1 className='text-4xl mt-4'>Proper Roasting</h1>
          <p className='sub-heading text-md mt-2'>Your coffee is brewed by first roasting <br /> the green coffee beans</p>
        </div>


      </div>
    </div>
  );
};

export default Features;