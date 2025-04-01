import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const BookingForm = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [roomDetails, setRoomDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
  });

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/rooms/${roomId}`);
        setRoomDetails(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch room details. Please try again.');
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [roomId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Date validation
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    
    if (checkOutDate <= checkInDate) {
      setError('Check-out date must be after check-in date');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/book-room', {
        ...formData,
        roomId
      });
      
      setSuccessMessage('Room booked successfully!');
      setError(null);
      
      // Navigate to booking details after successful booking
      setTimeout(() => {
        navigate(`/booking/${response.data.bookingId}`);
      }, 2000);
      
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to book room. Please try again.');
    }
  };

  if (loading) return <div className="loading">Loading room details...</div>;
  if (error && !successMessage) return <div className="error">{error}</div>;
  if (!roomDetails) return <div className="error">Room not found</div>;

  return (
    <div className="booking-form-container">
      {successMessage && <div className="success-message">{successMessage}</div>}
      
      <h2>Book Room {roomDetails.roomNumber}</h2>
      <div className="room-summary">
        <p><strong>Type:</strong> {roomDetails.type}</p>
        <p><strong>Price:</strong> ${roomDetails.price} per night</p>
      </div>
      
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="checkIn">Check-In Date *</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="checkOut">Check-Out Date *</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            min={formData.checkIn || new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm; 