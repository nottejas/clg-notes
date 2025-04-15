import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RoomList from './components/RoomList';
import BookingForm from './components/BookingForm';
import BookingDetails from './components/BookingDetails';
import UpdateBooking from './components/UpdateBooking';
import CancelBooking from './components/CancelBooking';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="container">
            <h1>Hotel Booking System</h1>
            <nav>
              <Link to="/" className="nav-link">Home</Link>
            </nav>
          </div>
        </header>
        
        <main className="container">
          <Routes>
            <Route path="/" element={<RoomList />} />
            <Route path="/book/:roomId" element={<BookingForm />} />
            <Route path="/booking/:bookingId" element={<BookingDetails />} />
            <Route path="/update-booking/:bookingId" element={<UpdateBooking />} />
            <Route path="/cancel-booking/:bookingId" element={<CancelBooking />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Hotel Booking System. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
