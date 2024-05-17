import React, { useEffect, useState } from "react";
import { State_City_data } from "../constants/Stateandcitylist";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  useEffect(() => {
    setState(Object.keys(State_City_data));
  }, []);

  const onSelectState = (stateName) => {
    console.log(stateName, State_City_data[stateName]);
    setCity(State_City_data[stateName]);
  };

  const onSubmit = (data) => {
    setUserInfo(data);
    // console.log(data);
  };
  return (
    <>
      
      <form onSubmit={handleSubmit(onSubmit)}>
      <pre>{JSON.stringify(userInfo)}</pre>
      <pre>{console.log(errors)}</pre>
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
                  placeholder="Enter First Name"
                  {...register("firstname", { required: true, minLength: 3 })}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                />
                {errors.firstname && <p>Please enter your First Name</p>}
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
                  placeholder="Enter Last Name"
                  {...register("lastname", { required: true, minLength: 3 })}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                />
                {errors.lastname && <p>Please enter your Last Name</p>}
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
                  {...register("number", {required: true, minLength: 10, maxLength: 15})}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                />
                {errors.number && <p>Please check the Number</p>}
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
                  {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                />
                {errors.email && <p>Please enter your email</p>}
              </div>
              <div className="mt-3">
                <label htmlFor="dob" className="block text-base mb-1 font-abc">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  placeholder="Enter your birth date"
                  {...register("dob", {required: true})}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                  onChange={handleDateChange}
                  max={new Date().toISOString().split("T")[0]}
                />
                {errors.dob && <p>Please enter your birth date</p>}
              </div>
              <div className="mt-3">
                <div className="block text-base font-abc">Gender:</div>
                <div className="block text-base font-abc my-3">
                  <input
                    id="gender"
                    type="radio"
                    name="gender"
                    value="male"
                    {...register("gender", {required: true})}
                  />
                  <label htmlFor="gender" className="text-base font-abc mx-3">
                    Male
                  </label>
                  <input
                    id="gender"
                    type="radio"
                    name="gender"
                    value="female"
                    {...register("gender", {required: true})}
                  />
                  <label htmlFor="gender" className="text-base font-abc mx-3">
                    Female
                  </label>
                  <input
                    id="gender"
                    type="radio"
                    name="gender"
                    value="other"
                    {...register("gender", {required: true})}
                  />
                  <label htmlFor="gender" className="text-base font-abc mx-3">
                    Other
                  </label>
                  {errors.gender && <p>Please select your gender</p>}
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="state" className="block text-base font-abc">
                  Choose your state:
                </label>
                <select
                  name="state"
                  id="state"
                  {...register("state", {required: true})}
                  className="rounded-md font-abc w-72 mt-2.5 text-base px-2 py-1.5 text-black"
                  onChange={(e) => onSelectState(e.target.value)}
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
                {errors.state && <p>Please select your state</p>}
              </div>
              <div className="mt-3">
                <label htmlFor="city" className="block text-base font-abc">
                  Choose your city:
                </label>
                <select
                  name="city"
                  id="city"
                  {...register("city", {required: true})}
                  className="rounded-md font-abc w-72 mt-2.5 text-base px-2 py-1.5 text-black"
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
                {errors.city && <p>Please enter your city</p>}
              </div>
              <div className="mt-3">
                <label htmlFor="pwd" className="block text-base mb-1 font-abc">
                  Password
                </label>
                <input
                  type="password"
                  id="pwd"
                  placeholder="Enter your password"
                  {...register("pwd", {required: true})}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                />
                {errors.pwd && <p>Please enter your password</p>}
              </div>
              <div className="mt-3">
                <label
                  htmlFor="cnfpwd"
                  className="block text-base mb-1 font-abc"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="cnfpwd"
                  placeholder="Enter your confirmed password"
                  {...register("cnfpwd", {required: true})}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                />
                {errors.cnfpwd && <p>Please enter your confirm password</p>}
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
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
