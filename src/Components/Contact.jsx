import React from "react";
import Profile from "../Images/Profile_contact.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      {/* Heading */}
      <h1 className="font-serif text-4xl font-bold text-center mb-8 text-gray-800">
        Get in Touch
      </h1>

      {/* Profile and Form Section */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:w-1/2">
          <img
            src={Profile}
            alt="Rushikesh's Profile"
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
        <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            Send Me a Message
          </h3>
          <form className="grid grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-gray-700 font-medium">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-gray-700 font-medium">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col col-span-2">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email *
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col col-span-2">
              <label htmlFor="message" className="text-gray-700 font-medium">
                Message *
              </label>
              <textarea
                id="message"
                placeholder="Type your message here..."
                rows="5"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Additional Information */}
      <div className="ml-10 text-balance mt-8">
        <h3 className="text-3xl font-semibold text-gray-700">
          Contact Information
        </h3>
        <p className="text-gray-600 mt-2 font-semibold text-xl">
          📧 Email me at:{" "}
          <a
            href="mailto:foodiesfantasy17@gmail.com"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            foodiesfantasy17@gmail.com
          </a>
        </p>
        <p className="text-gray-600 mt-6 text-xl indent-10">
              Hello! I'm Rushikesh, the creator of Foodie's Fantasy Cooks. Cooking
          is a cherished tradition passed down in my family, deeply rooted in
          love and shared experiences. My blog showcases tried-and-true recipes
          that promise to turn your cooking into memorable moments.
        </p>
        <Link
          to="/About"
          className="mt-4  ml-10 inline-block text-xl text-indigo-600 underline hover:text-indigo-800"
          aria-label="Learn more about me"
        >
          More About Me →
        </Link>
      </div>
    </div>
  );
};

export default Contact;
