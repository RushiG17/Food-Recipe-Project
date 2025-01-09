import React from "react";
import Profile from "../Images/Profile_contact.jpg";

const Support = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      {/* Heading */}
      <h1 className="font-serif text-4xl font-bold text-center mb-8 text-gray-800">
        Support
      </h1>

      {/* Profile and Form Section */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:w-1/2">
          <img
            src={Profile}
            alt="Rushikesh's profile picture"
            className="rounded-full h-72 w-72 object-cover shadow-md"
          />
          <div className="text-center mt-10">
            <h2 className="text-3xl font-semibold text-gray-700">
              Hi! I’m Rushikesh.{" "}
              <span className="text-indigo-600">Nice to meet you!</span>
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed text-xl indent-8">
              I'm passionate about connecting with people and sharing
              experiences through cooking, creativity, and storytelling. Feel
              free to reach out with any questions, collaborations, or just to
              say hello!
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Contact Me</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Type your message here"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
