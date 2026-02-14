import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients.split(",");
      if (ingredientList.length < 2) {
        newErrors.ingredients =
          "Please include at least two ingredients separated by commas.";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        instructions: steps.split(".").map((step) => step.trim()),
        summary: "User submitted recipe",
        image: "https://via.placeholder.com/600"
      };

      console.log("New Recipe Submitted:", newRecipe);

      alert("Recipe submitted successfully!");

      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});

      navigate("/");
    }
  };

  return (
 <div className="max-w-3xl mx-auto px-6 py-10 md:px-10 md:py-12">
  <div className="bg-white shadow-lg rounded-xl p-8 md:p-12">
    ...
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label className="block mb-2 font-semibold">
          Recipe Title
        </label>
        <input
          type="text"
          className="w-full md:w-3/4 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      {/* Ingredients */}
      <div>
        <label className="block mb-2 font-semibold">
          Ingredients (separate with commas)
        </label>
        <textarea
          rows="4"
          className="w-full md:w-3/4 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
        )}
      </div>

      {/* Steps */}
      <div>
        <label className="block mb-2 font-semibold">
          Preparation Steps (separate with periods)
        </label>
        <textarea
          rows="5"
          className="w-full md:w-3/4 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        ></textarea>
        {errors.steps && (
          <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full md:w-1/2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
      >
        Submit Recipe
      </button>
    </form>
  </div>
</div>
   
export default AddRecipeForm;
