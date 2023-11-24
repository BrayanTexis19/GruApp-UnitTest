/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/direcciones?query=${inputValue}`);
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>{suggestion.address}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteInput;
