import React, { useEffect, useState } from "react";
import Logo from "../Images/Recipe_Logo.jpg";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-[#D6CCC2]  sticky shadow-md ">
      <nav className="container mx-auto flex items-center h-24 px-6">
        <div className=" flex ">
          <img src={Logo} alt="" className=" h-20 w-28 object-contain ml-12" />
        </div>
        <h1 className="font-mono text-2xl antialiased font-bold  align-middle ml-12">
          Foodie's Fantasy
        </h1>
        <navbar className="hidden md:flex space-x-8  ml-56">
          <ul className=" flex space-x-8 ">
            <li>
              <Link
                to="/"
                className="font-serif text-xl antialiased font-semibold align-middle hover:text-red-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Recipes"
                className="font-serif text-xl antialiased font-semibold align-middle hover:text-red-600 transition"
              >
                Recipe's
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="font-serif text-xl antialiased font-semibold align-middle hover:text-red-600 transition "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="font-serif text-xl antialiased font-semibold align-middle hover:text-red-600 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </navbar>
        <div
          className="font-serif text-xl antialiased font-semibold align-middle hover:text-[#3F5EBE]
 transition ml-56 h-9 w-20 rounded-lg bg-[#EDEDE9] flex   justify-center   "
        >
          <button onClick={()=>navigate("/Login")}>Log in </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
