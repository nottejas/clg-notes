import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/employees.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch employee data');
        }
        return response.json();
      })
      .then(data => {
        const foundEmployee = data.find(emp => emp.id === parseInt(id));
        setEmployee(foundEmployee);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading employee details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!employee) {
    return (
      <div>
        <h2>Employee Not Found</h2>
        <Link to="/">Back to Directory</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{employee.name} - Details</h2>
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Age:</strong> {employee.age}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Join Date:</strong> {employee.joinDate}</p>
      <Link to="/">Back to Directory</Link>
    </div>
  );
};

export default EmployeeDetails;
