import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './UserList';
import EmployeeDetails from './EmployeeDetails';
import ErrorPage from './ErrorPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
