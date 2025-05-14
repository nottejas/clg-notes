import React, { useEffect, useState } from 'react';

function FlightManagement() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('/flights.json')
      .then(res => res.json())
      .then(data => setFlights(data))
      .catch(err => console.log("Error fetching flights:", err));
  }, []);

  return (
    <div>
      <h2>Flight Management</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Airline</th>
            <th>Departure</th>
            <th>Fare</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>{flight.airline}</td>
              <td>{flight.departure}</td>
              <td>{flight.fare}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightManagement;
