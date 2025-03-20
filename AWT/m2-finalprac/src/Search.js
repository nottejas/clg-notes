import React, { useState } from 'react';

const Search = ({ employees, setFilteredEmployees }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = employees.filter(employee =>
      employee.name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredEmployees(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
