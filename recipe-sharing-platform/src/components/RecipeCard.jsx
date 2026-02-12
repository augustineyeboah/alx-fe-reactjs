import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-600 mb-2">
        {recipe.title}
      </h2>

      <p className="text-gray-600 mb-4">
        {recipe.description}
      </p>

      <Link
        to={`/recipe/${recipe.id}`}
        className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}

export default RecipeCard;
