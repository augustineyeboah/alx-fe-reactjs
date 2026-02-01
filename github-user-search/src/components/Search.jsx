import { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", username);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
