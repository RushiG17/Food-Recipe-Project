import React from "react";
import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
  const option = ["Menu", "Veg", "Non-Veg"];

  return (
    <div>
    <div className="container mt-12 bg-[#D5BDAF] flex justify-center items-center align-middle h-28 gap-8 mx-auto px-6">
        {/* Buttons */}
      <section className="flex justify-center  gap-6 mt-8">
        {option.map((element) => {
          return (
            <button className="px-6 py-3 rounded-lg font-semibold text-xl bg-slate-200 hover:bg-slate-300 active:bg-slate-400 
            focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out">
              {element}
            </button>
          );
        })}
      </section>
    </div>

    {/* Recipe Grid */}
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-8">
      {recipes.slice(0, 8).map((element, index) => {
        return <Card key={index} element={element}></Card>;
      })}
    </section>

     <h4 className="text-2xl font-semibold text-center h-14 items-center 
     align-middle flex justify-center bg-[#D5BDAF]   hover:text-slate-800 mt-16">
    Recommended Recipes
    </h4>

  {/* Recommended Recipes */}
    <section className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 px-8">
        {recipes.slice(8).map((element, index) => {
          return <Card key={index} element={element} />;
        })}
      </section>
    </div>
  );
};

export default Recipes;
const Card = ({ element }) => {
  return (
    <Link to={`/recipes/${element.id}`} className="flex flex-col items-center bg-white 
    shadow-md rounded-lg overflow-hidden hover:shadow-xl transition w-min  ml-8 mt-10 gap-6 duration-400 ease-in-out">
      <div className=" flex flex-col items-center mt-5  w-96">
        <img
          src={element.image}
          alt={element.title}
          className="w-full h-48 object-fill rounded-md"
        />
        <h2 className="text-xl font-semibold mt-2 text-center ">{element.title}</h2>
        <h3 className="text-lg font-medium mt-1 text-red-500 text-center">
          {element.cookingTime}
        </h3>
      </div>
    </Link>
  );
};


