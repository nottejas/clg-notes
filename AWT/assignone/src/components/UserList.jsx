import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const UserList = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    fetch('/employees.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); 
        setEmployees(data);
        setFilteredEmployees(data);
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);
  

  const handleSearch = (query) => {
    const filtered = employees.filter(emp => 
      emp.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  const handleSort = (criteria) => {
    let sorted;
    if (criteria === 'name') {
      sorted = [...employees].sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'age') {
      sorted = [...employees].sort((a, b) => a.age - b.age);
    } else {
      // Show all employees
      sorted = employees;
    }
    setFilteredEmployees(sorted);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Employee Directory</h1>
      <SearchBar onSearch={handleSearch} />
      <select className="form-select mb-4" onChange={(e) => handleSort(e.target.value)}>
        <option value="">All Employees</option>
        <option value="name">Sort by Name</option>
        <option value="age">Sort by Age</option>
      </select>
      <div className="row">
        {filteredEmployees.map(emp => (
          <div key={emp.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{emp.name}</h5>
                <p className="card-text">Age: {emp.age}</p>
                <p className="card-text">Email: {emp.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
