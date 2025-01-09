import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const RecipesDetails = ({ recipes }) => {
  const { id } = useParams();
  const [recipesdetails, setRecipesDetails] = useState({});

  useEffect(() => {
    const filterrecipe = recipes.find((recipe) => {
      return recipe.id === id;
    });
    setRecipesDetails(filterrecipe);
  }, [id, recipes]);

  return (
    recipesdetails && (
      <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-14">
        <img
          src={recipesdetails.image}
          alt={recipesdetails.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <h2 className="text-2xl font-semibold text-center text-gray-800 mt-4">
          {recipesdetails.description}
        </h2>
        <p className="text-xl font-semibold text-center mt-4 text-red-500">
          {recipesdetails.cookingTime}
        </p>
        <h3 className="text-left text-xl font-bold text-gray-800 tracking-wide mt-5">
          Step :-
        </h3>
        <ul className="list-decimal pl-5 mt-3 text-gray-700">
          {recipesdetails.steps &&
            recipesdetails.steps.map((element) => {
              return (
                <li className="mt-2" key={element}>
                  {element}
                </li>
              );
            })}
        </ul>
        <h4 className="text-left text-xl font-bold text-gray-800 tracking-wide mt-5">
          Ingredients :-{" "}
        </h4>
        <ul className="list-decimal pl-5 mt-3 text-gray-700">
          {recipesdetails.ingredients &&
            recipesdetails.ingredients.map((element) => {
              return (
                <li className="mt-2" key={element}>
                  {element}
                </li>
              );
            })}
        </ul>

        {/* Optionally Add a Back Button */}
        <Link to="/">
          <button
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full 
      text-lg font-semibold cursor-pointer hover:bg-blue-600 transition duration-300"
          >
            Go Back
          </button>
        </Link>
      </div>
    )
  );
};

export default RecipesDetails;
