import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <div className="font-abc header text-white">
      <ul className="flex py-3 justify-between">
        <Link to="/dashboard"><FaHome className="w-14 h-6"/></Link>
        <li className="px-3">
          <Link to="/blogs" className="px-3">
            Blogs
          </Link>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
