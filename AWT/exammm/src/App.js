import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ShipmentDetails from './components/ShipmentDetails';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>CargoConnect - Shipment Tracking Dashboard</h1>
          <nav>
            <Link to="/">Dashboard</Link>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/shipment/:trackingId" element={<ShipmentDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;