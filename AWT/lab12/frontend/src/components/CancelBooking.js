import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const CancelBooking = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState(false);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/booking/${bookingId}`);
        setBooking(response.data);
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

  const handleCancelBooking = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/delete-booking/${bookingId}`);
      setSuccess(true);
      // Navigate back to homepage after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to cancel booking. Please try again.');
      setConfirmCancel(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return <div className="loading">Loading booking details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!booking) return <div className="error">Booking not found</div>;

  if (success) {
    return (
      <div className="cancel-success">
        <h2>Booking Cancelled Successfully</h2>
        <p>Your booking has been cancelled. You will be redirected to the home page shortly.</p>
        <button className="home-btn" onClick={() => navigate('/')}>Return to Home</button>
      </div>
    );
  }

  return (
    <div className="cancel-booking-container">
      <h2>Cancel Booking</h2>
      
      {!confirmCancel ? (
        <div className="cancel-confirmation">
          <div className="booking-summary">
            <p><strong>Booking ID:</strong> {booking._id}</p>
            <p><strong>Guest Name:</strong> {booking.name}</p>
            <p><strong>Room:</strong> {booking.room.roomNumber} ({booking.room.type})</p>
            <p><strong>Check-In:</strong> {formatDate(booking.checkIn)}</p>
            <p><strong>Check-Out:</strong> {formatDate(booking.checkOut)}</p>
          </div>
          
          <div className="warning-message">
            <p>Are you sure you want to cancel this booking?</p>
            <p>This action cannot be undone.</p>
          </div>
          
          <div className="action-buttons">
            <button 
              className="confirm-cancel-btn" 
              onClick={() => setConfirmCancel(true)}
            >
              Yes, Cancel Booking
            </button>
            <button 
              className="back-btn" 
              onClick={() => navigate(`/booking/${bookingId}`)}
            >
              No, Go Back
            </button>
          </div>
        </div>
      ) : (
        <div className="final-confirmation">
          <div className="warning-message urgent">
            <p>Please confirm cancellation of booking #{booking._id.substr(-6)}</p>
            <p>After confirmation, this booking will be permanently removed from the system.</p>
          </div>
          
          <div className="action-buttons">
            <button 
              className="final-cancel-btn" 
              onClick={handleCancelBooking}
            >
              Confirm Cancellation
            </button>
            <button 
              className="back-btn" 
              onClick={() => setConfirmCancel(false)}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CancelBooking; 