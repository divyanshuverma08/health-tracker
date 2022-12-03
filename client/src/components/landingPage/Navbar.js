import React from "react";
import logo from "../../assets/img/landingPage/logo.png";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    // <nav className="bg-[#93c5fd] lg:w-screen lg:h-14 shadow-sm lg:px-16 lg:py-3 flex justify-items-center items-center  w-full ">
    // <nav className="bg-[#93c5fd] sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <nav className="bg-[#2dd4bf] flex flex-col md:flex-row md:justify-start font-semibold items-center justify-center mb-1 py-1 shadow-l sticky top-0 bg-white z-10 rounded-md">
      <img
        src={logo}
        alt="logo"
        className="lg:h-10 lg:pr-3 h-10 pr-4 pl-2 mt-2"
      />
      <h1 className="font-poppins font-bold text-sm lg:text-xl mt-2 mb-2 hover:text-white">
        <Link to="/">Health Tracker</Link>
      </h1>
      <ul className="flex lg:w-60 justify-evenly font-poppins mx-12 w-full items-center space-x-4 md:text-sm">
        <li className=" hover:text-white mx-2">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:text-white">
          <Link to="/about">About us</Link>
        </li>
        <li className=" hover:text-white">
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>

      <button className="bg-primary lg:py-2 lg:px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary py-1 px-2 mr-2">
        {location.pathname === "/register" ? (
          <Link to="/">Login</Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
      </button>
    </nav>
  );
}
