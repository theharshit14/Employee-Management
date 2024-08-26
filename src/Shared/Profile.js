import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="p-10">
      <div className="mx-auto font-abc flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
        <img
          src="Pic"
          alt="profilepic"
          className="w-32 h-32 mx-auto rounded-full bg-gray-500 dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Harshit Verma</h2>
            <p className="px-5 text-xs sm:text-base text-gray-400 dark:text-gray-600">
              Junior Software developer
            </p>
          </div>
          <div className="flex justify-center mt-10 space-x-4 align-center">
            <Link to=""><IoLogoWhatsapp /></Link>
            <Link to="emailto:harshit2verma@gmail.com"><BiLogoGmail /></Link>
            <Link to="https://www.linkedin.com/in/harshit-verma-se/"><FaLinkedin /></Link>
            <Link to="https://github.com/theharshit14"><SiGithub /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
