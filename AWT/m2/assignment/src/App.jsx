import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShipmentList from './components/ShipmentList';
import ShipmentDetails from './components/ShipmentDetails';
import ErrorPage from './components/ErrorPage';
import ErrorPage from './components/ErrorPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>CargoConnect</h1>
          <nav>
            <Link to="/">Dashboard</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ShipmentList />} />
            <Route path="/shipment/:id" element={<ShipmentDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <footer>
          <p>© 2025 CargoConnect Logistics - Internal Dashboard</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;