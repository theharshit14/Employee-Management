import { React, useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../service/auth";
import "../App.css";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    authService
      .signin(data)
      .then((response) => {
        console.log("login response",response);
        // 1. if response.data is empty then throw an error "this email doesn't exist, please sign up"
        // 2. if response.data of 0 position then we have to take zeroth value.
        // 3. if email and password are exist in our data then it will be redirected to dashboard in toast message. 
        // 4. the data has to store in session storage.
        // 5. if password is not matched then either email or password is incorrect.
      })
      .catch((error) => {
        console.log("login error",error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center items-center main h-screen text-black">
        <div className="w-96 p-6 shadow-mg main-container rounded-md text-2xl">
          <div>
            <h1 className="text-center text-4xl mb-5 font-medium font-abc">
              Sign In
            </h1>
            <div className="mt-3">
              <label htmlFor="email" className="block text-base font-abc">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="rounded-md font-abc w-80 text-base px-2 py-1 text-black"
                required
              />
              {errors.email && (
                <p className="text-sm text-red-700 font-abc">
                  Please enter your email
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
                  required: true,
                  minLength: 6,
                  maxLength: 8,
                })}
                className="rounded-md font-abc w-80 text-base px-2 py-1 text-black"
              />
              {errors.pwd && (
                <p className="text-sm text-red-700 font-abc">
                  Please enter your password
                </p>
              )}
            </div>
            <div className="flex justify-between">
              <a
                href="/"
                className="block text-base mb-1 font-abc font-semibold hover:underline mt-3"
              >
                Forgot Password?
              </a>
              <a
                href="/"
                className="block text-base mb-1 mr-5 font-abc font-semibold hover:underline mt-3"
              >
                Sign Up
              </a>
            </div>

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
    </form>
  );
};

export default Signin;
