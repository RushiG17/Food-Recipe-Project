import React from "react";
import errorimg from "../Images/404_page-not-found.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 ERROR</h1>
        <img
          src={errorimg}
          alt="Page not found"
          className="w-1/2 mx-auto mb-4"
        />
        <p className="text-xl text-gray-700">
          Sorry, the page you are looking for cannot be found.
        </p>
        <p className="mt-2 text-gray-500">
          You can return to the{" "}
          
          <Link  className="text-blue-600 hover:underline" to="/">
           home page
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
