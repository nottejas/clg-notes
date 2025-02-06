import React, { useState } from 'react'

function UserForm() {
    const [form, setForm] = useState({
        name:"",
        email:"",
        password: "",
        gender: "",
        hobbies: [],
        zip: "",
        terms: false
    })

    const [errors, setErrors] = useState({})
    const [submittedData, setSubmittedData] = useState(null);

    const validate = () => {
        let formErrors = {};
        if(!form.name.trim()) formErrors.name="nj";
        if(!form.email) emailErrors.email = "asas"
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        
    }

  return (
    <div>UserForm</div>
  )
}

export default UserForm