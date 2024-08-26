import React from "react";
import { useForm } from "react-hook-form";
import userService from "../service/userService";

const Blogs = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    userService
      .getBlogs(data)
      .then((response) => {
        console.log("API response", response.data);
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };
  return (
    <>
      <div className="container mx-auto my-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid m-7 mx-auto border bg-slate-300 rounded-lg p-5 w-[45%]">
            <input
              type="text"
              placeholder="Title"
              className="px-1 mx-1 h-8 font-abc rounded-md w-60 mb-3"
            ></input>
            <textarea
              type="text"
              placeholder="Description"
              className="px-1 mx-1 w-[80%] h-20 rounded-md font-abc mb-3"
            ></textarea>
            <button
              className="relative px-8 py-2 rounded-md bg-white w-52 font-abc mx-auto isolation-auto z-10 border-2 border-slate-400
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:bg-slate-400 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            >
              Create blog here
            </button>
          </div>
        </form>
        <div className="rounded overflow-hidden shadow-2xl mb-10">
          <div className="p-6">
            <div className="font-bold text-xl font-abc">Jayam Verma</div>
            <h5 className="font-abc mb-2">Senior Software Engineer</h5>
            <p className="text-base font-abc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et
              perferendis eaque, exercitationem praesentium nihil.
            </p>
            <button className="font-abc bg-black text-white pr-2 pl-2 mt-2 rounded-md">
              Like
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
