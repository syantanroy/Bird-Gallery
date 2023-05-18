import React, { useState } from 'react';
import axios from 'axios';

function SearchBird() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const search = async () => {
    try {
      const response = await axios.get(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${query}&srprop=snippet&utf8=&origin=*`
      );
      console.log(response);
      setResult(response.data.query.search);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {result &&
        result.map((item) => (
          <div key={item.pageid}>
            <h3>{item.title}</h3>
            <p>{item.snippet}</p>
          </div>
        ))}
    </div>
  );
}

export default SearchBird;