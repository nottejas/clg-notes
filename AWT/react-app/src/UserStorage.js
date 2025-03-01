import React, { useState, useEffect } from "react";

const UserStorage = () => {
  const [user, setUser] = useState({ name: "", age: "", city: "" });
  const [storedUser, setStoredUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setStoredUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = () => {
    if (user.name && user.age && user.city) {
      localStorage.setItem("user", JSON.stringify(user));
      setStoredUser(user);
      alert("User details saved!");
    } else {
      alert("Please fill all fields!");
    }
  };

  const clearStorage = () => {
    localStorage.removeItem("user");
    setStoredUser(null);
    alert("User data cleared!");
  };

  return (
    <div>
      <h2>Store User in Local Storage</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} />
      <input type="text" name="city" placeholder="City" onChange={handleChange} />
      <button onClick={saveUser}>Save User</button>
      <button onClick={clearStorage}>Clear Storage</button>

      {storedUser && (
        <div>
          <h3>Stored User Data:</h3>
          <p><strong>Name:</strong> {storedUser.name}</p>
          <p><strong>Age:</strong> {storedUser.age}</p>
          <p><strong>City:</strong> {storedUser.city}</p>
        </div>
      )}
    </div>
  );
};

export default UserStorage;
