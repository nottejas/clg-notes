import React from 'react'

function QuestionTwo({ label }) {
  return (
    <div>
        <button onClick={() => console.log(`Button clicked: ${label}`)}>{label}CLick me</button>
    </div>
  )
}

export default QuestionTwo