import React, { useState } from 'react';

function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    pincode: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  // Handle change in any input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validation logic
  const validate = () => {
    let tempErrors = {};

    // First & Last Name required
    if (!formData.firstName.trim())  tempErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required";

    // Pincode - exactly 6 digits
    if (!/^\d{6}$/.test(formData.pincode)) tempErrors.pincode = "Pincode must be 6 digits";

    // Email - simple regex + required
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Enter a valid email";
    }

    // Phone - starts with 9/8/7 + 10 digits
    if (!/^[987]\d{9}$/.test(formData.phone)) {
      tempErrors.phone = "Phone must start with 9/8/7 and be 10 digits";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log("Submitted Data: ", formData);
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label><br />
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
        </div>

        <div>
          <label>Last Name: </label><br />
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
        </div>

        <div>
          <label>Pincode: </label><br />
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
          {errors.pincode && <p style={{ color: "red" }}>{errors.pincode}</p>}
        </div>

        <div>
          <label>Email: </label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Phone: </label><br />
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
