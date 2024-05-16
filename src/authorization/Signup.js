import React, { useEffect, useState } from "react";
import { State_City_data } from "../constants/Stateandcitylist";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [userInfo, setUserInfo] = useState();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  console.log(errors);

  useEffect(() => {
    setState(Object.keys(State_City_data));
  }, []);

  const onSelectState = (stateName) => {
    console.log(stateName, State_City_data[stateName]);
    setCity(State_City_data[stateName]);
  };
  return (
    <>
      {/* {console.log(state)} */}
      <div className="flex justify-center items-center bg-slate-800 h-screen text-white">
        <div className="w-1/2 p-6 shadow-mg bg-gray-500 rounded-md text-2xl">
          <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="Enter First Name"
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                  {...register("firstName", { required: "First Name is required", minLength: 3 })}
                />
              </div>
              <p>{errors?.firstname?.message}</p>
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
                  placeholder="Enter Last Name"
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                  {...register("lastName", { required: "Last Name is required", minLength: 3 })}
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="number"
                  className="block text-base mb-1 font-abc"
                >
                  Contact No
                </label>
                <input
                  type="tel"
                  id="number"
                  placeholder="Enter your contact number"
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                  {...register("number", { required: "Contact Number is required", min: 10, max: 15 })}
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="email"
                  className="block text-base mb-1 font-abc"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                  {...register("email", { required: "Email is required", pattern: /^[A-Z0-9. _%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="dob" className="block text-base mb-1 font-abc">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  placeholder="Enter your birth date"
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                  {...register("dob", { valueAsDate: true})}
                />
              </div>
              <div className="mt-3">
                <div className="block text-base font-abc">Gender:</div>
                <div className="block text-base font-abc my-3">
                  <input {...register("radio")} id="gender" type="radio" name="gender" value="male"/>
                  <label htmlFor="gender" className="text-base font-abc mx-3">
                    Male
                  </label>
                  <input {...register("radio")} id="gender" type="radio" name="gender" value="female"/>
                  <label htmlFor="gender" className="text-base font-abc mx-3">
                    Female
                  </label>
                  <input {...register("radio")} id="gender" type="radio" name="gender" value="other"/>
                  <label htmlFor="gender" className="text-base font-abc mx-3">
                    Other
                  </label>
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
                  onChange={(e) => onSelectState(e.target.value)} {...register("state", {required:"Please select the state"})}
                >
                  {state.map((item) => (
                    <option
                      value={item}
                      key={item}
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
                  className="rounded-md font-abc w-72 mt-2.5 text-base px-2 py-1.5 text-black" {...register("city", {required:"Please select the city"})}
                >
                  {city.map((item) => (
                    <option
                      value={item}
                      key={item}
                      className="block text-base mb-1 font-abc text-black"
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-3">
                <label htmlFor="pwd" className="block text-base mb-1 font-abc">
                  Password
                </label>
                <input
                  type="password"
                  id="pwd"
                  placeholder="Enter your password"
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                  {...register}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="cnfpwd" className="block text-base mb-1 font-abc">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="cnfpwd"
                  placeholder="Enter your confirmed password"
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                  {...register}
                />
              </div>
            </div>
            <div className="mt-3">
              <span className="block text-base mb-1 font-abc">
                <input type="checkbox" /> Accept all the terms and conditions
              </span>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="mt-3 p-2 font-abc bg-slate-800 hover:bg-gray-500 rounded-md text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
