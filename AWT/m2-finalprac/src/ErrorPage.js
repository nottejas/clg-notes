import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h2>not found</h2>
        <Link to="/" >Go back to homepage</Link>
    </div>
  )
}

export default ErrorPage