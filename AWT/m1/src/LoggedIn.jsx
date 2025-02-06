import React, { useState } from "react"

function LoggedIn() {

    const[isLoggedIn, setisLoggedIn] = useState(false);
    return (
        <div>
            <h1>{isLoggedIn ? "Logged In" : "Logged Out" }</h1>
            <button onClick={() => setisLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logut" : "Login"}
            </button>
        </div>
    )
}

export default LoggedIn