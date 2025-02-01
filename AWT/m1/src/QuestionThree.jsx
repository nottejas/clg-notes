import React from 'react'

function QuestionThree() {
    const product = ["Laptop", "Phone", "Charger"]
    return (
    <div>
        <ul>
            {product.map((product, index) => (
                <li key={index}>
                    {product} <button onClick={() => console.log(`You clicked on: ${product}`)}>Question 3</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default QuestionThree