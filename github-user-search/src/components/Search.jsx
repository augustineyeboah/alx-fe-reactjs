import { useState } from "react";

function Search() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <input placeholder="Search..." />

      {results.length > 0 && (
        <div>
          Search Results
        </div>
      )}

      {results.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default Search;