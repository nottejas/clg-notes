import React from 'react';
import { Link, Route, BrowserRouter as  Router, Routes } from 'react-router-dom';
import './App.css';
import ShipmentDetails from './ShipmentDetails';
import ShipmentList from './ShipmentList';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <Router>
      <h1>Shipment</h1>
      <nav>
        <Link to="/">Dashboard Page</Link>
      </nav>
      <Routes>
        <Route path='/' element={<ShipmentList />} />
        <Route path='/shipment/:trackingId' element={<ShipmentDetails />} />
        <Route path='*' element={<ErrorPage />} /> 
      </Routes>
    </Router>

  );
}

export default App;
