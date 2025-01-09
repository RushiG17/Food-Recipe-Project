import React from "react";
import HearoSection from "./HearoSection";
import Recipes from "./Recipes";

const Home = ({recipes}) => {
  return (
    <div className="min-h-screen mx-auto overflow-y-auto  flex flex-col bg-[#EDEDE9]">
      <div className="h-20 w-full bg-white flex justify-center items-center">
        <h1 className="font-serif antialiased text-wrap text-2xl font-bold">
          Simple recipes made for
          <span
            style={{
              fontFamily: "cursive",
              fontStyle: "italic",
              color: "#998066",
            }}
          >
            {" "}
            real, actual, everyday life.
          </span>
        </h1>
      </div>
      <HearoSection/>
      <Recipes recipes={recipes}/>
    </div>
  );
};

export default Home;
