const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Room = require('../models/Room');
const mongoose = require('mongoose');

// Book a room
router.post('/book-room', async (req, res) => {
  try {
    const { roomId, name, email, phone, checkIn, checkOut, specialRequests, numberOfGuests } = req.body;
    
    // Validate required fields
    if (!roomId || !name || !email || !checkIn || !checkOut) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    
    // Check if room exists
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    
    // Check if room is available
    if (room.status !== 'Available') {
      return res.status(400).json({ message: 'Room is not available for booking' });
    }
    
    // Validate dates
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    
    if (checkInDate >= checkOutDate) {
      return res.status(400).json({ message: 'Check-out date must be after check-in date' });
    }
    
    // Calculate number of days
    const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    
    // Calculate total cost
    const totalCost = room.price * days;
    
    // Create a new booking
    const newBooking = new Booking({
      room: roomId,
      name,
      email,
      phone: phone || '',
      checkIn: checkInDate,
      checkOut: checkOutDate,
      totalCost,
      specialRequests: specialRequests || '',
      numberOfGuests: numberOfGuests || 1
    });
    
    // Save the booking
    const savedBooking = await newBooking.save();
    
    // Update room status to Booked
    room.status = 'Booked';
    await room.save();
    
    res.status(201).json({
      message: 'Booking successful',
      bookingId: savedBooking._id,
      booking: savedBooking
    });
  } catch (err) {
    res.status(400).json({ message: 'Booking failed', error: err.message });
  }
});

// Get all bookings (admin functionality)
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('room').sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get a specific booking by ID
router.get('/booking/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid booking ID format' });
    }
    
    const booking = await Booking.findById(req.params.id).populate('room');
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Update a booking
router.put('/update-booking/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid booking ID format' });
    }
    
    const { name, email, phone, checkIn, checkOut, specialRequests, numberOfGuests } = req.body;
    
    // Get the existing booking
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    // Validate dates if they are being updated
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      
      if (checkInDate >= checkOutDate) {
        return res.status(400).json({ message: 'Check-out date must be after check-in date' });
      }
      
      // Recalculate total cost if dates are changing
      const room = await Room.findById(booking.room);
      const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
      booking.totalCost = room.price * days;
      booking.checkIn = checkInDate;
      booking.checkOut = checkOutDate;
    }
    
    // Update other fields
    if (name) booking.name = name;
    if (email) booking.email = email;
    if (phone !== undefined) booking.phone = phone;
    if (specialRequests !== undefined) booking.specialRequests = specialRequests;
    if (numberOfGuests) booking.numberOfGuests = numberOfGuests;
    
    // Save the updated booking
    const updatedBooking = await booking.save();
    
    res.json({
      message: 'Booking updated successfully',
      booking: updatedBooking
    });
  } catch (err) {
    res.status(400).json({ message: 'Failed to update booking', error: err.message });
  }
});

// Cancel a booking
router.delete('/delete-booking/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid booking ID format' });
    }
    
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    // Get the room associated with the booking
    const room = await Room.findById(booking.room);
    
    // Delete the booking
    await Booking.findByIdAndDelete(req.params.id);
    
    // Update room status back to Available
    if (room) {
      room.status = 'Available';
      await room.save();
    }
    
    res.json({ message: 'Booking cancelled successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Search bookings by email or name
router.get('/search-bookings', async (req, res) => {
  try {
    const { email, name } = req.query;
    const query = {};
    
    if (email) {
      query.email = { $regex: email, $options: 'i' };
    }
    
    if (name) {
      query.name = { $regex: name, $options: 'i' };
    }
    
    const bookings = await Booking.find(query).populate('room').sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router; 