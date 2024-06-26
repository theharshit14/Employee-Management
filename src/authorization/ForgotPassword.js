import React from "react";
import { useForm } from "react-hook-form";
import authService from "../service/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    authService.signin(data).then((response)=> {
      let updatePassword = response.data[0];
      updatePassword.password = data.password;
      console.log('Password changed', updatePassword);

      authService.forgotPassword(updatePassword.id, updatePassword).then((response)=>{
        console.log('Password Updated', response.data);
      })
      .catch((error)=>{
        console.log('Password not updated', error);
      })
    })

    .catch((error)=>{
      console.log('Password not changed', error);
    })

    toast.success("Password Changed Successfully!", {
      position: "bottom-right",
      autoClose: 3000,
    })

    setTimeout(()=>{
      navigate("/");
    }, 3000)
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
                  className="mt-3 p-2 font-abc mx-2 relative px-5 py-2 isolation-auto z-10 border-2 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#10123e] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-medium text-black bg-white border-blue-950 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit
                </button>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
