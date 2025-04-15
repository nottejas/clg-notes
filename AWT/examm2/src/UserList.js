import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const UserList = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('name-asc');

  useEffect(() => {
    fetch('/employees.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch employee data');
        }
        return response.json();
      })
      .then(data => {
        setEmployees(data);
        setFilteredEmployees(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (employees.length === 0) return;

    const sortedEmployees = [...filteredEmployees];
    switch (sortOption) {
      case 'name-asc':
        sortedEmployees.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sortedEmployees.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'age-asc':
        sortedEmployees.sort((a, b) => a.age - b.age);
        break;
      case 'age-desc':
        sortedEmployees.sort((a, b) => b.age - a.age);
        break;
      default:
        break;
    }

    setFilteredEmployees(sortedEmployees);
  }, [sortOption, employees]);

  if (loading) return <div>Loading employee data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1>CodeSphere Employee Directory</h1>
      <Search employees={employees} setFilteredEmployees={setFilteredEmployees} />

      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="age-asc">Age (Youngest First)</option>
        <option value="age-desc">Age (Oldest First)</option>
      </select>

      {filteredEmployees.map(employee => (
        <div key={employee.id}>
          <h3>
            <Link to={`/employee/${employee.id}`}>{employee.name}</Link>
          </h3>
          <p>Age: {employee.age}</p>
          <p>Email: {employee.email}</p>
        </div>
      ))}
    </>
  );
};

export default UserList;
