import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const SignIn = () => {

  const { userSignIn } = useContext(AuthContext);

  // handle sign in
  const handleSignIn = (e) => {
    e.preventDefault();

    // get data from input
    const form = e.target;
    const formData = new FormData(form);
    const signInData = Object.fromEntries(formData.entries());


    //firebase sign in
    userSignIn(signInData.email, signInData.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;


        const signInInfo = {
          email: signInData.email,
          lastSignInTime: userCredential.user?.metadata?.lastSignInTime
        }

        // update last sign in user in db
        fetch('https://coffee-store-server-ten-rosy.vercel.app/users', {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signInInfo),
          // …
        }).then((res) => res.json()).then((data) => {


        })
        // ...
      })
      .catch((error) => {

        const errorMessage = error.message;
        alert(errorMessage)
      });

  }
  return (
    <div className='bg-[url("/assets/images/more/11.png")] bg-no-repeat py-32'>
      <div className="hero min-h-screen">
        <div className="flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className='font-bold text-2xl mb-5 sub-heading'>Sign In!</h1>
              <form onSubmit={handleSignIn}>
                <label className="label sub-heading">Email</label>
                <input type="email" name='email' className="input mb-4 w-full" placeholder="Email" />
                <label className="label sub-heading">Password</label>
                <input type="password" name='password' className="input w-full" placeholder="Password" />
                <div className='mt-2'>
                  <a className="link link-hover sub-heading">Forgot password?</a>
                </div>

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

                <button type='submit' className="btn bg-[#D2B48C] text-white py-4 w-full sub-heading">Sign In</button>
              </form>

              {/* go to register */}
              <p className='mt-2 text-center sub-heading'>
                Didn't have an account? Please <Link to={'/signUp'} className='font-semibold sub-heading'>Register.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
