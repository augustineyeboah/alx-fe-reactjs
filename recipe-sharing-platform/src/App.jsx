import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";
import Navbar from "./components/Navbar";
import initialRecipes from "./data/recipes";

function App() {
  const [recipes, setRecipes] = useState(initialRecipes);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add" element={<AddRecipe setRecipes={setRecipes} />} />
      </Routes>
    </div>
  );
}

export default App;
