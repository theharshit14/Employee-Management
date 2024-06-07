import React from "react";
import { useForm } from "react-hook-form";
import authService from "../service/auth";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    authService.signin(data).then((response)=> {
      console.log('Password changed', response.data);
    })
    .catch((error)=>{
      console.log('Password not changed', error);
    })
  };

  const password = watch("password");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center main h-screen text-black">
          <div className="w-96 p-6 shadow-mg main-container rounded-md text-2xl">
            <div>
              <h1 className="text-center text-4xl mb-5 font-medium font-abc">
                Forgot Password?
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
                    required: "Please enter your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="rounded-md font-abc w-80 text-base px-2 py-1 text-black"
                />
                {errors.email && (
                  <p className="text-sm text-red-700 font-abc">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mt-3">
                <label htmlFor="pwd" className="block text-base font-abc">
                  Create New Password
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
                  className="rounded-md font-abc w-80 text-base px-2 py-1 text-black"
                />
                {errors.password && (
                  <p className="text-sm text-red-700 font-abc">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mt-3">
                <label htmlFor="cnfpwd" className="block text-base font-abc">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="cnfpwd"
                  placeholder="Enter your confirm password"
                  {...register("confirmpassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className="rounded-md font-abc w-80 text-base px-2 py-1 text-black"
                />
                {errors.confirmpassword && (
                  <p className="text-sm text-red-700 font-abc">
                    {errors.confirmpassword.message}
                  </p>
                )}
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
    </>
  );
};

export default ForgotPassword;
