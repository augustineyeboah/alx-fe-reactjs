import { useState } from 'react';
import useRecipeStore from '../store';

function AddRecipeForm() {
  const [text, setText] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addRecipe(text);
        setText('');
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter recipe"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddRecipeForm;
