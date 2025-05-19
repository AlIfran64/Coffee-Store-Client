import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
  const { userSignUp } = useContext(AuthContext);

  // Handle Sign up
  const handleSignUp = (e) => {
    e.preventDefault();

    // get data from input
    const form = e.target;
    const formData = new FormData(form);
    const signUpData = Object.fromEntries(formData.entries());
    // Destructure sign Up data
    const { email, password, ...restFormData } = signUpData;



    // sign up user in the firebaase
    userSignUp(email, password).then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);

      const userProfile = {
        email,
        ...restFormData,
        creationTime: userCredential.user?.metadata?.creationTime,
        lastSignInTime: userCredential.user?.metadata?.lastSignInTime
      }

      // Save profile info in db
      fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userProfile),
        // …
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Registration Completed Successfully!",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                title: "sub-heading"
              }
            });
            form.reset();
          }

        })

      // ...
    })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });

  }

  return (
    <div className='bg-[url("/assets/images/more/11.png")] bg-no-repeat py-32'>
      <div className="hero min-h-screen">
        <div className="flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className='font-bold text-2xl mb-5 sub-heading'>Please Sign Up</h1>

              <form onSubmit={handleSignUp}>
                <label className="label sub-heading">Name</label>
                <input type="text" name='name' className="input mb-4 w-full" placeholder="Name" />

                <label className="label sub-heading">Address</label>
                <input type="text" name='address' className="input mb-4 w-full" placeholder="Address" />

                <label className="label sub-heading">Phone</label>
                <input type="number" name='phone' className="input mb-4 w-full" placeholder="Phone" />

                <label className="label sub-heading">Photo URL</label>
                <input type="text" name='photo' className="input mb-4 w-full" placeholder="Photo URL" />
                <label className="label sub-heading">Email</label>
                <input type="email" name='email' className="input mb-4 w-full" placeholder="Email" />
                <label className="label sub-heading">Password</label>
                <input type="password" name='password' className="input w-full" placeholder="Password" />

                <div className="flex items-center gap-4 mt-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="font-bold text-gray-600 sub-heading">Or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Google login */}
                <button className="btn bg-white text-black border-[#e5e5e5] my-5 w-full">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  <span className="sub-heading">Sign In with Google</span>
                </button>

                <button type='submit' className="btn bg-[#D2B48C] text-white py-4 w-full sub-heading">Sign Up</button>
              </form>

              {/* go to login */}
              <p className='mt-2 text-center sub-heading'>
                Already have an account? Please <Link to={'/signIn'} className='font-semibold sub-heading'>Sign In.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
