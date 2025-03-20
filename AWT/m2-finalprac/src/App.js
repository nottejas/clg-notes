import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeesDetails from "./EmployeesDetails";
import ErrorPage from "./ErrorPage";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/employee:id" element={<EmployeesDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
        
    </Router>
  );
}

export default App;
