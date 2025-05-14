import React, { useState } from "react";

function CheckoutForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    pincode: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errs = {};
    if (!form.firstName) errs.firstName = "Required";
    if (!form.lastName) errs.lastName = "Required";
    if (!/^\d{6}$/.test(form.pincode)) errs.pincode = "Invalid pincode";
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!/^[987]\d{9}$/.test(form.phone)) errs.phone = "Invalid phone";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      alert("Order Placed Successfully!");
    } else {
      setErrors(errs);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      {errors.firstName && <span>{errors.firstName}</span>}<br/>

      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      {errors.lastName && <span>{errors.lastName}</span>}<br/>

      <input name="pincode" placeholder="Pincode" onChange={handleChange} />
      {errors.pincode && <span>{errors.pincode}</span>}<br/>

      <input name="email" placeholder="Email" onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}<br/>

      <input name="phone" placeholder="Phone" onChange={handleChange} />
      {errors.phone && <span>{errors.phone}</span>}<br/>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CheckoutForm;
