import React, { useState } from 'react';
import './Search.css';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Real-time search as user types
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by Tracking ID or Receiver Name..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
}

export default Search;