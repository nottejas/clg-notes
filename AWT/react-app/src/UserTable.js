import React, { useState, useEffect } from "react";
const jsonData = [
  {
    id: 1,
    name: "Tejas padmakar",
    email: "tejas@gmail.com",
    phone: "696969",
    address: "45fvvf",
  },
  {
    id: 2,
    name: "Vaibhavi lakhalani",
    email: "Vaibhavi@gmail.com",
    phone: "1237890",
    address: "4/b,Givrivihar",
  },
];

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(jsonData);
  }, []);

  return (
    <div>
      <h2>User Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
    