import React from "react";
import { useForm } from "react-hook-form";
import authService from "../service/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../App.css";


const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    authService
      .signin(data)
      .then((response) => {
        console.log("API response", response.data);
        console.log("User data", data);
        if (response.data.length === 0) {
          toast.error("This email doesn't exist, please Sign up!", {
            autoClose: 2000,
          });
          return;
        }
        if (response.data[0].password !== data.password) {
          toast.error("Email or password is incorrect!", {
            autoClose: 2000,
          });
          return;
        }
        toast.success("LoggedIn Successfully!", {
          position: "bottom-right",
          autoClose: 3000,
        });
        sessionStorage.setItem("userData", JSON.stringify(response.data[0]));

        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      })
      .catch((error) => {
        console.log("login error", error);
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
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="rounded-md font-abc w-80 text-base px-2 py-1 text-black"
                required
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
                className="rounded-md font-abc w-80 text-base px-2 py-1 text-black"
              />
              {errors.password && (
                <p className="text-sm text-red-700 font-abc">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex justify-between">
              <a
                href="/forgotPassword"
                className="block text-base mb-1 font-abc font-semibold hover:underline mt-3"
              >
                Forgot Password?
              </a>
              <a
                href="/signup"
                className="block text-base mb-1 mr-5 font-abc font-semibold hover:underline mt-3"
              >
                Sign Up
              </a>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-3 mx-2 p-2 font-abc relative px-5 py-2 isolation-auto z-10 border-2 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#10123e] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-medium text-black bg-white border-blue-950 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </form>
  );
};

export default Signin;
