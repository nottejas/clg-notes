import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const BookingDetails = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div className="loading">Loading booking details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!booking) return <div className="error">Booking not found</div>;

  // Format dates for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="booking-details-container">
      <h2>Booking Details</h2>
      
      <div className="booking-info">
        <div className="booking-header">
          <h3>Booking #{booking._id.substr(-6)}</h3>
          <span className={`booking-status ${booking.status.toLowerCase()}`}>
            {booking.status}
          </span>
        </div>
        
        <div className="guest-info">
          <h4>Guest Information</h4>
          <p><strong>Name:</strong> {booking.name}</p>
          <p><strong>Email:</strong> {booking.email}</p>
          {booking.phone && <p><strong>Phone:</strong> {booking.phone}</p>}
        </div>
        
        <div className="room-info">
          <h4>Room Information</h4>
          <p><strong>Room Number:</strong> {booking.room.roomNumber}</p>
          <p><strong>Room Type:</strong> {booking.room.type}</p>
          <p><strong>Price:</strong> ${booking.room.price} per night</p>
        </div>
        
        <div className="stay-info">
          <h4>Stay Information</h4>
          <p><strong>Check-In:</strong> {formatDate(booking.checkIn)}</p>
          <p><strong>Check-Out:</strong> {formatDate(booking.checkOut)}</p>
          <p><strong>Duration:</strong> {
            Math.ceil((new Date(booking.checkOut) - new Date(booking.checkIn)) / (1000 * 60 * 60 * 24))
          } night(s)</p>
          <p><strong>Total Cost:</strong> ${booking.totalCost}</p>
        </div>
        
        <div className="booking-actions">
          <Link to={`/update-booking/${bookingId}`} className="update-btn">
            Update Booking
          </Link>
          <Link to={`/cancel-booking/${bookingId}`} className="cancel-btn">
            Cancel Booking
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails; 