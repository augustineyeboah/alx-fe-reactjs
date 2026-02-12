import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          RecipeShare 🍲
        </h1>

        <div className="space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>

          <Link
            to="/add"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
