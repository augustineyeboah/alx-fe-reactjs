import RecipeCard from "../components/RecipeCard";

function Home({ recipes }) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Recipe List 🍲
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
