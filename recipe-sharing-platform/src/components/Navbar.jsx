import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🍽 RecipeShare
        </Link>

        <div>
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
<Link
  to="/add"
  className="ml-6 text-gray-600 hover:text-blue-600 transition duration-300"
>
  Add Recipe
</Link>
