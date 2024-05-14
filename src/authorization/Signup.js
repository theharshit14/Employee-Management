import React, { useEffect, useState } from "react";
import { State_City_data } from "../constants/Stateandcitylist";

const Signup = () => {
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    setState(Object.keys(State_City_data));
  }, []);

   const onSelectState = (stateName) => {
    console.log(stateName, State_City_data[stateName]);
      setCity(State_City_data[stateName]);
  }
  return (
    <>
    {console.log(state)}
      <div className="flex justify-center items-center bg-slate-800 h-screen text-white">
        <div className="w-1/2 p-6 shadow-mg bg-gray-500 rounded-md text-2xl">
          <h1 className="text-center text-4xl mb-5 font-medium font-abc">
            Sign Up
          </h1>
          <div className="grid grid-cols-2">
            <div className="mt-3">
              <label
                htmlFor="firstname"
                className="block text-base mb-1 font-abc"
              >
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
              <label
                htmlFor="lastname"
                className="block text-base mb-1 font-abc"
              >
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
              <label htmlFor="email" className="block text-base mb-1 font-abc">
                Contact No
              </label>
              <input
                type="tel"
                id="number"
                className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                required
              />
            </div>
            <div className="mt-3">
              <label htmlFor="number" className="block text-base mb-1 font-abc">
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
              <label htmlFor="dob" className="block text-base mb-1 font-abc">
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
              <div>Gender:</div>
              <div>
                <input id="gender" type="radio" name="male" />
                <label htmlFor="setB_male">Male</label>
                <input id="gender" type="radio" name="female" />
                <label htmlFor="setB_female">Female</label>
                <input id="gender" type="radio" name="other" />
                <label htmlFor="setB_both">Other</label>
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="state" className="block text-base font-abc">
                Choose your state:
              </label>
              <select
                name="state"
                id="state"
                className="rounded-md font-abc w-72 mt-2.5 text-base px-2 py-1.5 text-black"
                onChange={e => onSelectState(e.target.value)}
              >
                {state.map((item) => (
                  <option
                    value={item} key={item}
                    className="block text-base mb-1 font-abc text-black"
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-3">
              <label htmlFor="city" className="block text-base font-abc">
                Choose your city:
              </label>
              <select
                name="city"
                id="city"
                className="rounded-md font-abc w-72 mt-2.5 text-base px-2 py-1.5 text-black"
              >
                {city.map((item)=>
                <option
                value={item} key={item}
                className="block text-base mb-1 font-abc text-black"
              >
                {item}
              </option>
                )}
                
              </select>
            </div>
            <div className="mt-3">
              <label htmlFor="pwd" className="block text-base mb-1 font-abc">
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
    </>
  );
};

export default Signup;
