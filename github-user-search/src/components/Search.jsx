import { useState } from "react";

function Search() {
  const [results, setResults] = useState(["Test result"]);

  return (
    <div>
      <h1>Search</h1>

      {results && results.length > 0 && (
        <div>
          Results:
        </div>
      )}

      {results.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
}

export default Search;