import { useParams, Link } from "react-router-dom";
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
    return (
      <div className="text-center py-20 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover rounded-lg"
        />

        <h1 className="text-4xl font-bold mt-6 mb-4">
          {recipe.title}
        </h1>

        <p className="text-gray-700 text-lg mb-6">
          {recipe.summary}
        </p>

        <Link
          to="/"
          className="inline-block bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
