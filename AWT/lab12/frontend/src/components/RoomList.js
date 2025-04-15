import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/rooms');
        setRooms(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch rooms. Please try again later.');
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) return <div className="loading">Loading rooms...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="room-list-container">
      <h2>Available Rooms</h2>
      <div className="room-grid">
        {rooms.map(room => (
          <div key={room._id} className="room-card">
            <h3>Room {room.roomNumber}</h3>
            <p className="room-type">{room.type}</p>
            <p className="room-price">${room.price} per night</p>
            <p className={`room-status ${room.status === 'Available' ? 'available' : 'booked'}`}>
              {room.status}
            </p>
            {room.status === 'Available' && (
              <Link to={`/book/${room._id}`} className="book-btn">
                Book Now
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList; 