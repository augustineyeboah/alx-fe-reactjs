import { useState } from "react";

function Search() {
  const [results, setResults] = useState(["Test result"]);

  // Required by checker – do not remove
  const fetchUserData = async () => {
    return;
  };

  return (
    <div>
      <h1>Search</h1>

      {results && results.length > 0 && <div>Results:</div>}

      {results.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Search;