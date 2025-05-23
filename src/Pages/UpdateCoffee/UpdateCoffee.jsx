import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

  // load data
  const data = useLoaderData();



  // destructure
  const { name, chef, supplier, category, taste, details, photo, _id } = data;


  // Handle update
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    // get data from input
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());


    // send updated data to db
    fetch(`https://coffee-store-server-ten-rosy.vercel.app/coffees/${_id}`, {

      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCoffee)

    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Updated Successfully!",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              title: "sub-heading"
            }
          });
        }

      })

    form.reset();

  }


  return (
    <div className='w-full bg-[url("/assets/images/more/11.png")] bg-no-repeat py-32'>

      {/* back btn */}
      <Link to={"/"}>
        <div className='max-w-7xl mx-auto mb-10'>
          <button className='bg-[#D2B48C] py-2 px-4 flex items-center gap-3 rounded-md text-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
              <path d="M16.5 8H1.5M1.5 8L8.25 14.75M1.5 8L8.25 1.25" stroke="#331A15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home</button>
        </div>
      </Link>


      <div className='bg-[#F4F3F0] max-w-7xl mx-auto rounded-md p-24'>
        <h1 className='text-5xl text-center mb-5 text-[#374151]'>Update Existing Coffee Details</h1>
        <p className='text-center leading-7 sub-heading'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>

        {/* form */}
        <div className='mt-20'>

          <form onSubmit={handleUpdateCoffee}>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              {/* Name */}
              <div>
                <label className='sub-heading font-semibold text-xl'>Name</label>
                <input
                  className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                  name='name'
                  type="text"
                  defaultValue={name}
                  placeholder='Enter coffee name' />
              </div>

              {/* Chef */}
              <div>
                <label className='sub-heading font-semibold text-xl'>Chef</label>
                <input
                  className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                  name='chef'
                  type="text"
                  defaultValue={chef}
                  placeholder='Enter coffee chef' />
              </div>

              {/* Supplier */}
              <div>
                <label className='sub-heading font-semibold text-xl'>Supplier</label>
                <input
                  className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                  name='supplier'
                  type="text"
                  defaultValue={supplier}
                  placeholder='Enter coffee supplier' />
              </div>

              {/* Taste */}
              <div>
                <label className='sub-heading font-semibold text-xl'>Taste</label>
                <input
                  className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                  name='taste'
                  type="text"
                  defaultValue={taste}
                  placeholder='Enter coffee taste' />
              </div>

              {/* Category */}
              <div>
                <label className='sub-heading font-semibold text-xl'>Category</label>
                <input
                  className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                  name='category'
                  type="text"
                  defaultValue={category}
                  placeholder='Enter coffee category' />
              </div>

              {/* Details */}
              <div>
                <label className='sub-heading font-semibold text-xl'>Details</label>
                <input
                  className='bg-white py-3 px-4 w-full mt-2 sub-heading rounded-md'
                  name='details'
                  type="text"
                  defaultValue={details}
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
                defaultValue={photo}
                placeholder='Enter photo URL' />
            </div>

            <button type='submit' className='w-full bg-[#D2B48C] text-2xl border-2 border-[#331A15] py-2 rounded-md mt-5'>Update Coffee</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;