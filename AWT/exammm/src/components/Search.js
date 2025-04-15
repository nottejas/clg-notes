import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Handle input change and trigger search
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Trigger search in real-time as user types
    onSearch(value);
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search by tracking ID or receiver name..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;