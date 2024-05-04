import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/gallerylogo.jpg";

function Navbar() {
  return (
    <nav className="flex items-center  p-2 h-14 bg-gradient-to-r from-amber-800 via-yellow-200 to-amber-800 justify-center">
      <img
        src={Logo}
        alt="LOGO"
        className="w-10 h-10 rounded-lg absolute left-5"
      />
      <NavLink
        to="/"
        activeClassName="text-white"
        className="text-xl text-white hover:text-gray-200"
      >
        <h1 className="font-extrabold sm:text-5xl text-3xl font-serif  text-rose-900 ">
          IMAGE GALLERY
        </h1>
      </NavLink>
    </nav>
  );
}

export default Navbar;
