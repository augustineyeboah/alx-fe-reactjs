import { useParams } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetail() {
  const { id } = useParams();

  // Convert id to number and find recipe
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          Recipe not found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        {recipe.title}
      </h1>

      <p className="text-gray-700 mb-6">
        {recipe.description}
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Ingredients:
      </h2>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetail;
