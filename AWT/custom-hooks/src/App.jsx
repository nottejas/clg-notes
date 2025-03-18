import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
    </>
  )
}

function MyComponent(){
  useEffect(() => {
    console.error("Compo mounted");
    return () => {
      console.log("Component: unmounted")
    }
  }, [])
  return <div>
    From inside my Component.
  </div>
}

export default App
