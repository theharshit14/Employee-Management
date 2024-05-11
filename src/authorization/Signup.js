import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center bg-slate-800 h-screen text-white">
      <div className="w-96 p-6 shadow-mg bg-gray-500 rounded-md text-2xl">
        <h1 className="text-center text-3xl font-medium font-abc">Sign Up</h1>
        <div className="mt-3">
          <label for="firstname" className="block text-base mb-1 font-abc">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="rounded-md w-full font-abc text-base px-2 py-1 text-black"
          />
        </div>
        <div className="mt-3">
          <label for="lastname" className="block text-base mb-1 font-abc">
            Last Name
          </label>
          <input type="text" id="lastname" className="rounded-md w-full font-abc text-base px-2 py-1 text-black" />
        </div>
        <div className="mt-3">
          <label for="email" className="block text-base mb-1 font-abc">
            Email ID
          </label>
          <input type="email" id="email" className="rounded-md w-full font-abc text-base px-2 py-1 text-black" />
        </div>
        <div className="mt-3">
          <label for="number" className="block text-base mb-1 font-abc">
            WhatsApp No
          </label>
          <input type="text" id="number" className="rounded-md w-full font-abc text-base px-2 py-1 text-black" />
        </div>
        <div className="mt-3">
          <label for="pwd" className="block text-base mb-1 font-abc">
            Create Password
          </label>
          <input type="password" id="pwd" className="rounded-md w-full font-abc text-base px-2 py-1 text-black" />
        </div>
        <div className="text-center">
          <button type="submit" className="mt-3 p-2 font-abc bg-slate-800 rounded-md text-sm">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
