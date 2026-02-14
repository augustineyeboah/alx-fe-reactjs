import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find(
          (item) => item.id === parseInt(id)
        );
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white max-w-2xl w-full rounded-xl shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-4 mb-4">
          {recipe.title}
        </h1>

        <p className="text-gray-700">
          {recipe.summary}
        </p>

        <button
          onClick={() => window.history.back()}
          className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
