import React, { useState, useEffect } from "react";
const jsonData = [
    {
      id: 1,
      name: "Vaibhavi lakhalani",
      email: "Vaibhavi@gmail.com",
      phone: "1237890",
      address: "4/b,Givrivihar",
    },
    {
      id: 2,
      name: "Aditi deshmukh",
      email: "aditi@gmail.com",
      phone: "9873210",
      address: "45fvvf",
    },
  
  ];


  const UserTable = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      // Simulating fetching JSON data
      setUsers(jsonData);
    }, []);
  
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center border">
                <td className="px-4 py-2 border">{user.id}</td>
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.phone}</td>
                <td className="px-4 py-2 border">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  
  export default UserTable;
  