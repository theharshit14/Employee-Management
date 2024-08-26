import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { State_City_data } from "../constants/Stateandcitylist";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authService from "../service/auth";
import "../App.css";

const Signup = () => {
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const allFields = watch([
    "firstname",
    "lastname",
    "number",
    "dob",
    "gender",
    "state",
    "city",
    "email",
    "password",
    "confirmPassword",
    "checkbox",
  ]);

  const [selectedDate, setSelectedDate] = useState(null);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

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
    console.log(data);
    delete data.confirmPassword;

    authService
      .postSignup(data)
      .then((response) => {
        toast.success("Account created successfully!", {
          position: "bottom-right",
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
        console.log(response);
      })
      .catch((error) => {
        console.log("APIerror", error);
      });
  };

  useEffect(() => {
    console.log(allFields);
    const isAllFieldsFilled = allFields.every((field) => field && field !== "");
    const passwordsMatch = allFields[8] === allFields[9];
    setIsFormValid(isAllFieldsFilled);
  }, [allFields, setIsFormValid]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="main flex justify-center items-center h-screen text-brown">
          <div className="main-container w-1/2 p-6 shadow-xl rounded-md text-2xl">
            <h1 className="text-center text-4xl mb-3 font-medium font-abc">
              Sign Up
            </h1>
            <div className="grid grid-cols-2">
              <div className="mt-3">
                <label htmlFor="firstname" className="block text-base font-abc">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Enter First Name"
                  {...register("firstname", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                    maxLength: {
                      value: 10,
                      message: "Maximum 10 characters required",
                    },
                  })}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                />
                {errors.firstname && (
                  <p className="text-sm text-red-700 font-abc">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
              <div className="mt-3">
                <label htmlFor="lstname" className="block text-base font-abc">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Enter Last Name"
                  {...register("lastname", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                    maxLength: {
                      value: 10,
                      message: "Maximum 10 characters required",
                    },
                  })}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                />
                {errors.lastname && (
                  <p className="text-sm text-red-700 font-abc">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
              <div className="mt-3">
                <label htmlFor="number" className="block text-base font-abc">
                  Contact No
                </label>
                <input
                  type="tel"
                  id="number"
                  placeholder="Enter your contact number"
                  {...register("number", {
                    required: true,
                    minLength: {
                      value: 10,
                      message: "Please enter 10 digit phone number",
                    },
                    maxLength: 15,
                  })}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                />
                {errors.number && (
                  <p className="text-sm text-red-700 font-abc">
                    {errors.number.message}
                  </p>
                )}
              </div>
              <div className="mt-3">
                <label htmlFor="dob" className="block text-base font-abc">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  placeholder="Enter your birth date"
                  {...register("dob", { required: true })}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                  onChange={handleDateChange}
                  max={new Date().toISOString().split("T")[0]}
                />
                {errors.dob && (
                  <p className="text-sm text-red-700 font-abc">
                    Please enter your birth date
                  </p>
                )}
              </div>
              <div className="mt-3">
                <div className="block text-base font-abc">Gender:</div>
                <div className="block text-base font-abc my-3">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    {...register("gender", { required: true })}
                  />
                  <label htmlFor="gender" className="text-base font-abc mx-3">
                    Male
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    {...register("gender", { required: true })}
                  />
                  <label htmlFor="gender" className="text-base font-abc mx-3">
                    Female
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    {...register("gender", { required: true })}
                  />
                  <label htmlFor="gender" className="text-base font-abc mx-3">
                    Other
                  </label>
                  {errors.gender && (
                    <p className="text-sm text-red-700 font-abc">
                      Please select your gender
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="state" className="block text-base font-abc">
                  State:
                </label>
                <select
                  name="state"
                  id="state"
                  {...register("state", { required: true })}
                  className="rounded-md font-abc w-72 text-base px-2 py-1.5 text-black"
                  onChange={(e) => onSelectState(e.target.value)}
                >
                  {state.map((item) => (
                    <option
                      value={item}
                      key={item}
                      className="block text-base font-abc text-black"
                    >
                      {item}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <p className="text-sm text-red-700 font-abc">
                    Please select your state
                  </p>
                )}
              </div>
              {city.length > 0 && (
                <div className="mt-3">
                  <label htmlFor="city" className="block text-base font-abc">
                    City:
                  </label>
                  <select
                    name="city"
                    id="city"
                    {...register("city", { required: true })}
                    className="rounded-md font-abc w-72 text-base px-2 py-1.5 text-black"
                  >
                    {city.map((item) => (
                      <option
                        value={item}
                        key={item}
                        className="block text-base font-abc text-black"
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.city && (
                    <p className="text-sm text-red-700 font-abc">
                      Please select your city
                    </p>
                  )}
                </div>
              )}

              <div className="mt-3">
                <label htmlFor="email" className="block text-base font-abc">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                />
                {errors.email && (
                  <p className="text-sm text-red-700 font-abc">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mt-3">
                <label htmlFor="pwd" className="block text-base font-abc">
                  Password
                </label>
                <input
                  type="password"
                  id="pwd"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Please enter your password",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Password cannot exceed 10 characters",
                    },
                  })}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                />
                {errors.password && (
                  <p className="text-sm text-red-700 font-abc">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mt-3">
                <label htmlFor="cnfpwd" className="block text-base font-abc">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="cnfpwd"
                  placeholder="Enter your confirmed password"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className="rounded-md font-abc w-72 text-base px-2 py-1 text-black"
                />
                {errors.cnfpwd && (
                  <p className="text-sm text-red-700 font-abc">
                    Please enter your confirm password
                  </p>
                )}
              </div>
            </div>
            <div className="mt-3">
              <span className="block text-base font-abc font-semibold">
                <input
                  type="checkbox"
                  id="checkbox"
                  {...register("checkbox", { required: true })}
                />{" "}
                Accept all the terms and conditions
              </span>
              {errors.checkbox && (
                <p className="text-sm text-red-700 font-abc">
                  Please tick in checkbox
                </p>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`mt-3 p-2 font-abc ${
                  !isFormValid ? "disabled:opacity-50" : ""
                } relative px-5 py-2 isolation-auto z-10 border-2 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#10123e] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-medium text-black bg-white border-blue-950 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none`}
              >
                Submit
              </button>
              <button
                type="reset"
                className="mt-3 mx-2 p-2 font-abc relative px-5 py-2 isolation-auto z-10 border-2 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#10123e] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-medium text-black bg-white border-blue-950 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                Reset
              </button>
            </div>
          </div>
          <ToastContainer />
        </div>
      </form>
    </>
  );
};

export default Signup;
