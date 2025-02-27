import React, { useState } from "react";
const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form Data as JSON:", JSON.stringify(formData, null, 2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block font-semibold">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        
        <div className="mb-2">
          <label className="block font-semibold">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        <div className="mb-2">
          <label className="block font-semibold">Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        <div className="mb-2">
          <label className="block font-semibold">Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
