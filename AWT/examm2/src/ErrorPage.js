import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
};

export default ErrorPage;
