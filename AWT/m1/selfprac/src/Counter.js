import React, { useEffect, useState } from 'react'

function Counter() {
  
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`Alert hi ${count}`);
    }, [count])

    return (
    <div>Count: {count}
        <button onClick={() => setCount(count + 1)}>Vaibhu</button>
        <button onClick={() => setCount(count - 1)}>teju</button>
        <button onClick={() => setCount(0)}>wssd</button>
    </div>
  )
}

export default Counter