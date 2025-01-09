import React from "react";
import Hero1img from "../Images/Hero 1.jpg";
import Hero2img from "../Images/Hero 2.jpg";
import Hero3img from "../Images/hero 3.jpg";

const HeroSection = () => {
  const heroData = [
    { img: Hero1img, name: "Grilled Salmon with Vegetables", alt: "Grilled Salmon with Vegetables" },
    { img: Hero2img, name: "Angus Chicken Fillet", alt: "Angus Chicken Fillet" },
    { img: Hero3img, name: "Grilled Chicken Steak with Asparagus", alt: "Grilled Chicken Steak with Asparagus" },
  ];

  return (
    <section className="h-[470px] bg-[#E3D5CA] overflow-hidden flex flex-col py-10">
      <div className="container mx-auto px-4 py-6 max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {heroData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-md 
              rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-md"
              />
              <h2 className="text-2xl font-bold py-4 text-center italic text-[#7a6752] antialiased break-words">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
