import React from 'react';
import '../App.css';

const Signin = () => {
  return (
    <div className="flex justify-center items-center main h-screen text-black">
      <div className="w-96 p-6 shadow-mg main-container rounded-md text-2xl">
        <div>
        <h1 className="text-center text-4xl mb-5 font-medium font-abc">
          Sign In
        </h1>
          <div className="mt-3">
            <label htmlFor="number" className="block text-base mb-1 font-abc">
              Email
            </label>
            <input
              type="text"
              id="email" placeholder='Enter your email'
              className="rounded-md font-abc w-80 text-base px-2 py-1 text-black"
              required
            />
          </div>
          <div className="mt-3">
            <label htmlFor="pwd" className="block text-base mb-1 font-abc">
              Password
            </label>
            <input
              type="password"
              id="pwd" placeholder='Enter your password'
              className="rounded-md font-abc w-80 text-base px-2 py-1 text-black"
            />
          </div>
          <a href='/' className="block text-base mb-1 font-abc hover:underline mt-3">Forgot Password?</a>

          <div className="text-center">
            <button
              type="submit"
              className="mt-3 p-2 font-abc my-button rounded-md text-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin;
