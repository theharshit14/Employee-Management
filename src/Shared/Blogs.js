import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="grid content-end m-7 border bg-slate-300 rounded-lg p-5 w-[45%]">
          <input type="text" placeholder="Title" className="px-1 mx-1 h-8 font-abc rounded-md w-60 mb-3"></input>
          <textarea type="text" placeholder="Description" className="px-1 mx-1 w-[80%] h-20 rounded-md font-abc mb-3"></textarea>
          <button className="bg-black text-white p-1 font-abc rounded-md w-40">Create blog here</button>
        </div>
          <div className="rounded overflow-hidden shadow-2xl mb-10">
            <div className="p-6">
              <div className="font-bold text-xl font-abc">Jayam Verma</div>
              <h5 className="font-abc mb-2">Senior Software Engineer</h5>
              <p className="text-base font-abc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores
                et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <button className="font-abc bg-black text-white pr-2 pl-2 mt-2 rounded-md">Like</button>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-2xl mb-10">
            <div className="p-6">
              <div className="font-bold text-xl font-abc">Harshit Verma</div>
              <h5 className="font-abc mb-2">Junior Frontend Developer</h5>
              <p className="text-base font-abc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores
                et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <button className="font-abc bg-black text-white pr-2 pl-2 mt-2 rounded-md">Like</button>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-2xl mb-10">
            <div className="p-6">
              <div className="font-bold text-xl font-abc">Kartik Verma</div>
              <h5 className="font-abc mb-2">Mechanical Design Engineer</h5>
              <p className="text-base font-abc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores
                et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <button className="font-abc bg-black text-white pr-2 pl-2 mt-2 rounded-md">Like</button>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-2xl mb-10">
            <div className="p-6">
              <div className="font-bold text-xl font-abc">Shreya Garhwal</div>
              <h5 className="font-abc mb-2">Technical Lead</h5>
              <p className="text-base font-abc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores
                et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <button className="font-abc bg-black text-white pr-2 pl-2 mt-2 rounded-md">Like</button>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-2xl mb-10">
            <div className="p-6">
              <div className="font-bold text-xl font-abc">Praveen Verma</div>
              <h5 className="font-abc mb-2">Magento Developer</h5>
              <p className="text-base font-abc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores
                et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <button className="font-abc bg-black text-white pr-2 pl-2 mt-2 rounded-md">Like</button>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-2xl mb-10">
            <div className="p-6">
              <div className="font-bold text-xl font-abc">Ankita Verma</div>
              <h5 className="font-abc mb-2">Junior Advocate</h5>
              <p className="text-base font-abc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores
                et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <button className="font-abc bg-black text-white pr-2 pl-2 mt-2 rounded-md">Like</button>
            </div>
          </div>
      </div>
    </>
  );
};

export default Blogs;
