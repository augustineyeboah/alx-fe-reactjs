import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (item) => item.id === parseInt(id)
        );
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">
            {recipe.title}
          </h1>

          {/* Summary */}
          <p className="text-gray-700 text-lg mb-8">
            {recipe.summary}
          </p>

          {/* Ingredients Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
              Ingredients
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
              Cooking Instructions
            </h2>

            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Back Button */}
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
