import React from 'react'

function QuestionOne() {
    const colors = ["Red", "Green", "Blue"];

    return (
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    );
  }
export default QuestionOne