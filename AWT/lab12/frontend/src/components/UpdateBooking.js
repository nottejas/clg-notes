import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const UpdateBooking = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
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
    const fetchBookingDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/booking/${bookingId}`);
        setBooking(response.data);
        
        // Format dates for form inputs (YYYY-MM-DD)
        const formatDateForInput = (dateString) => {
          const date = new Date(dateString);
          return date.toISOString().split('T')[0];
        };
        
        // Set form data with booking details
        setFormData({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone || '',
          checkIn: formatDateForInput(response.data.checkIn),
          checkOut: formatDateForInput(response.data.checkOut),
        });
        
        setLoading(false);
      } catch (err) {
        setError(err.response?.status === 404 
          ? 'Booking not found. Please check the booking ID.' 
          : 'Failed to load booking details. Please try again later.');
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

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
      await axios.put(`http://localhost:5000/api/update-booking/${bookingId}`, formData);
      
      setSuccessMessage('Booking updated successfully!');
      setError(null);
      
      // Navigate back to booking details after successful update
      setTimeout(() => {
        navigate(`/booking/${bookingId}`);
      }, 2000);
      
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update booking. Please try again.');
    }
  };

  if (loading) return <div className="loading">Loading booking details...</div>;
  if (error && !successMessage) return <div className="error">{error}</div>;
  if (!booking) return <div className="error">Booking not found</div>;

  return (
    <div className="update-booking-container">
      {successMessage && <div className="success-message">{successMessage}</div>}
      
      <h2>Update Booking</h2>
      <div className="booking-summary">
        <p><strong>Booking ID:</strong> {booking._id}</p>
        <p><strong>Room:</strong> {booking.room.roomNumber} ({booking.room.type})</p>
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
        
        <div className="form-actions">
          <button type="submit" className="update-btn">Update Booking</button>
          <button 
            type="button" 
            className="cancel-action-btn"
            onClick={() => navigate(`/booking/${bookingId}`)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBooking; 