// File: src/components/ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="return-button">Return to Dashboard</Link>
      </div>
    </div>
  );
}

export default ErrorPage;