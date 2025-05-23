import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddCoffee = () => {

  // Handle Add Coffee
  const handleAddCoffee = (e) => {
    e.preventDefault();

    // get data from input

    // const name = e.target.name.value;
    // const chef = e.target.chef.value;
    // const supplier = e.target.supplier.value;
    // const taste = e.target.taste.value;
    // const category = e.target.category.value;
    // const details = e.target.details.value;
    // const photo = e.target.photo.value;

    // const userInfo = { name, chef, supplier, taste, category, details, photo };

    // OR

    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());





    // Send coffee data to db
    fetch('https://coffee-store-server-ten-rosy.vercel.app/coffees', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
      // …
    }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully!",
            icon: "success",
            draggable: true,
            customClass: {
              title: "sub-heading"
            }
          });
          form.reset();
        }

      })

  }


  return (
    <div className='w-full bg-[url("/assets/images/more/11.png")] bg-no-repeat py-32'>

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


      <div className='bg-[#F4F3F0] max-w-7xl mx-auto rounded-md p-24'>
        <h1 className='text-5xl text-center mb-5 text-[#374151]'>Add New Coffee</h1>
        <p className='text-center leading-7 sub-heading'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>

        {/* form */}
        <div className='mt-20'>

          <form onSubmit={handleAddCoffee}>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              {/* Name */}
              <div>
                <label className='sub-heading font-semibold text-xl'>Name</label>
                <input
                  className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                  name='name'
                  type="text"
                  placeholder='Enter coffee name' />
              </div>

              {/* Chef */}
              <div>
                <label className='sub-heading font-semibold text-xl'>Chef</label>
                <input
                  className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                  name='chef'
                  type="text"
                  placeholder='Enter coffee chef' />
              </div>

              {/* Supplier */}
              <div>
                <label className='sub-heading font-semibold text-xl'>Supplier</label>
                <input
                  className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                  name='supplier'
                  type="text"
                  placeholder='Enter coffee supplier' />
              </div>

              {/* Taste */}
              <div>
                <label className='sub-heading font-semibold text-xl'>Taste</label>
                <input
                  className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                  name='taste'
                  type="text"
                  placeholder='Enter coffee taste' />
              </div>

              {/* Category */}
              <div>
                <label className='sub-heading font-semibold text-xl'>Category</label>
                <input
                  className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                  name='category'
                  type="text"
                  placeholder='Enter coffee category' />
              </div>

              {/* Details */}
              <div>
                <label className='sub-heading font-semibold text-xl'>Details</label>
                <input
                  className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                  name='details'
                  type="text"
                  placeholder='Enter coffee details' />
              </div>
            </div>

            {/* Photo */}
            <div className='my-5'>
              <label className='sub-heading font-semibold text-xl'>Photo</label>
              <input
                className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                name='photo'
                type="text"
                placeholder='Enter photo URL' />
            </div>

            <button type='submit' className='w-full bg-[#D2B48C] text-2xl border-2 border-[#331A15] py-2 rounded-md mt-5'>Add Coffee</button>

          </form>
        </div>
      </div>
    </div>

  );
};

export default AddCoffee;