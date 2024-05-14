import React from "react";
import {City_List} from '../components/config.js/CitiesList';

const Signup = () => {
  return (
    <div className="flex justify-center items-center bg-slate-800 h-screen text-white">
      <div className="w-1/2 p-6 shadow-mg bg-gray-500 rounded-md text-2xl">
        <h1 className="text-center text-4xl mb-5 font-medium font-abc">
          Sign Up
        </h1>
        <div className="grid grid-cols-2">
          <div className="mt-3">
            <label for="firstname" className="block text-base mb-1 font-abc">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
              required
            />
          </div>
          <div className="mt-3">
            <label for="lastname" className="block text-base mb-1 font-abc">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
              required
            />
          </div>
          <div className="mt-3">
            <label for="email" className="block text-base mb-1 font-abc">
              Contact No
            </label>
            <input
              type="tel"
              id="email"
              className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
              required
            />
          </div>
          <div className="mt-3">
            <label for="number" className="block text-base mb-1 font-abc">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
              required
            />
          </div>
          <div className="mt-3">
            <label for="dob" className="block text-base mb-1 font-abc">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
              required
            />
          </div>
          <div className="mt-3">
            <label for="gender" className="block text-base font-abc">
              Choose a gender:
            </label>
            <select
              name="gender"
              id="gender"
              className="rounded-md font-abc w-72 mt-2.5 text-base px-2 py-1.5 text-black"
            >
              <option
                value="None"
                className="block text-base mb-1 font-abc text-black"
              ></option>
              <option
                value="Male"
                className="block text-base mb-1 font-abc text-black"
              >
                Male
              </option>
              <option
                value="Female"
                className="block text-base mb-1 font-abc text-black"
              >
                Female
              </option>
              <option
                value="Other"
                className="block text-base mb-1 font-abc text-black"
              >
                Other
              </option>
            </select>
          </div>
          <div className="mt-3">
            <label for="city" className="block text-base font-abc">
              Choose your city:
            </label>
            <select
              name="gender"
              id="gender"
              className="rounded-md font-abc w-72 mt-2.5 text-base px-2 py-1.5 text-black"
            >
              <option
                value={City_List}
                className="block text-base mb-1 font-abc text-black"
              ></option>
              <option
                value="Male"
                className="block text-base mb-1 font-abc text-black"
              >
                Male
              </option>
              <option
                value="Female"
                className="block text-base mb-1 font-abc text-black"
              >
                Female
              </option>
              <option
                value="Other"
                className="block text-base mb-1 font-abc text-black"
              >
                Other
              </option>
            </select>
          </div>
          <div className="mt-3">
            <label for="pwd" className="block text-base mb-1 font-abc">
              Password
            </label>
            <input
              type="password"
              id="pwd"
              className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-3 p-2 font-abc bg-slate-800 rounded-md text-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
