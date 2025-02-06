import { useState } from "react";

function Form() {
  const [productName, setProductName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
          {[1, 2, 3, 4, 5].map((num) => ({ num }))}
        </select>
      </form>
    </div>
  );
}

export default Form;
