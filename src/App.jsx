import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Support from "./Components/Support";
import TermsAndPolices from "./Components/TermsAndPolices";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RecipesData from "./Components/Recipes.json";
import RecipesDetailes from "./Components/RecipesDetails";
// import Card from "./Components/Card";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect (()=>{
    setRecipes(RecipesData)
  },[]) 

  return (
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home  recipes={recipes}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/support" element={<Support />} />
          <Route path="/termsandpolices" element={<TermsAndPolices />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/card" element={<Card/>}/> */}
          <Route path="/recipes/:id" element={<RecipesDetailes recipes={recipes}/>}/>

        </Routes>

        <Footer/>

      </BrowserRouter>
    
  );
}

export default App;
