function AddRecipe({ setRecipes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(),
      title,
      description,
      ingredients: ingredients.split(",").map((i) => i.trim()),
    };

    setRecipes((prev) => [newRecipe, ...prev]); // Add new recipe to state

    // Clear form
    setTitle("");
    setDescription("");
    setIngredients("");

    alert("Recipe submitted!");
  };

  // ...rest of the form code remains unchanged
}
