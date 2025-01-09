import React from "react";
import ProfileImg from "../Images/About.jpg";
import About1 from "../Images/About_Food_01.avif";
import About2 from "../Images/About_Food_02.jpg";
import About3 from "../Images/About_Food_03.avif";
import About4 from "../Images/About_Food_04.avif";
import About5 from "../Images/About_Food_05.avif";
import About6 from "../Images/About_Food_06.avif";

const About = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      {/* Title Section */}
      <h1 className="font-serif text-4xl font-bold text-center mb-10 text-gray-800">
        About Me
      </h1>

      {/* Profile and Text Section */}
      <div className="flex flex-col md:flex-row items-center ml-5 gap-8">
        {/* Profile Image */}
        <img
          src={ProfileImg}
          alt="Portrait of Rushikesh"
          className="w-full md:w-1/3 h-auto rounded-lg shadow-md object-cover"
        />

        {/* Text Content */}
        <div className="text-center md:text-left  ml-5 max-w-2xl">
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
            Hi, I’m <span className="italic text-indigo-600">Rushikesh</span>,
            and welcome to{" "}
            <span className="text-indigo-600 font-medium">
              Foodie's Fantasy
            </span>
            !
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            This is my little corner of the internet where I share my passion
            for cooking, writing, and savoring the beautiful moments in life.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Here, I post fresh, flavorful, and approachable recipes inspired by
            real life. Whether you're cooking for yourself, family, or friends,
            you'll find dishes that are as fun to make as they are to eat.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tag your creations with{" "}
            <span className="font-bold text-indigo-600">@Foodie's Fantasy</span>{" "}
            on Instagram! Your featured recipes might appear in our Friday
            shout-outs!
          </p>
        </div>
      </div>

      {/* Image Gallery Section */}
      <h2 className="font-serif text-3xl font-bold text-center mt-12 mb-8 text-gray-800 hover:text-indigo-500 transition-colors duration-300 ease-in-out">
        Some of My Favorite Recipes
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
        {[About1, About2, About3, About4, About5, About6].map(
          (image, index) => (
            <img
              key={index}
              src={image}
              alt={`Recipe ${index + 1}`}
              className="w-full h-60 object-contain rounded-lg   shadow-md hover:scale-105 transform transition duration-300"
            />
          )
        )}
      </div>

      {/* Closing Section */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          If you're new to cooking or want to explore new techniques,{" "}
          <span className="font-bold text-indigo-600">Foodie's Fantasy</span> is
          a fantastic place to start!
        </p>
        <h3 className="text-xl font-serif font-bold text-gray-800 mt-4">
          Visit{" "}
          <span className="text-indigo-600 font-bold">Foodie's Fantasy</span>{" "}
          for more recipes and kitchen tips!
        </h3>
      </div>
    </div>
  );
};

export default About;
