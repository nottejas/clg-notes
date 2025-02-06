import React, { useState } from 'react'

function Basics() {
    const [login, setLogin] = useState(false)

    {}

  return (
    <div>
        <div style={{ backgroundColor: login ? "#333" : "#fff", color: login ? "#fff" : "#000", padding: "20px"}}>

        </div>
        {login ? "Logged In" : "Not logged in" }
        <button onClick={() => setLogin(!login)}>Status</button>
    </div>
  )
}

export default Basics