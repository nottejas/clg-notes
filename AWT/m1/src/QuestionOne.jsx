import React from 'react'

function QuestionOne() {
    const color = ["Red", "Green", "Blue"]
    return (
    <div>
        <ul>
            {color.map((color, index) => (
                <li key={index}>{color}</li>
            ))}
        </ul>
    </div>
  )
}

export default QuestionOne