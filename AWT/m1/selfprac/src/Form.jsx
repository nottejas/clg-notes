import { useState } from "react";

function Form() {
  const [productName, setProductName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName.trim()) {
      setError("Product Name is required.");
      setConfirmation("");
      return;
    }
    if (!rating) {
      setError("Please select a rating.");
      setConfirmation("");
      return;
    }

    setError(""); // Clear errors if validation passes
    setConfirmation(`Thank you for your feedback! 
      Product: ${productName} 
      Rating: ${rating} 
      Feedback: ${feedback || "No feedback provided"}`);
    
    // Clear form
    setProductName("");
    setRating("");
    setFeedback("");
  };

  return (
    <div>
      <h2>Product Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Select Rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>

        <textarea
          placeholder="Enter feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>

        {confirmation && <p style={{ color: "green" }}>{confirmation}</p>}
      </form>
    </div>
  );
}

export default Form;
