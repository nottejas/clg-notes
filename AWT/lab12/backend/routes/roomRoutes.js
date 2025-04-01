const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// Get all rooms
router.get('/rooms', async (req, res) => {
  try {
    const { type, minPrice, maxPrice, status } = req.query;
    const filter = {};
    
    // Apply filters if provided
    if (type) filter.type = type;
    if (status) filter.status = status;
    
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    
    const rooms = await Room.find(filter).sort({ roomNumber: 1 });
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get a specific room by ID
router.get('/rooms/:id', async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Add a new room (admin functionality)
router.post('/rooms', async (req, res) => {
  try {
    const { roomNumber, type, price, status, amenities, description, imageUrl } = req.body;
    
    // Check if room number already exists
    const existingRoom = await Room.findOne({ roomNumber });
    if (existingRoom) {
      return res.status(400).json({ message: 'Room number already exists' });
    }
    
    const newRoom = new Room({
      roomNumber,
      type,
      price,
      status: status || 'Available',
      amenities: amenities || [],
      description: description || '',
      imageUrl: imageUrl || ''
    });
    
    const savedRoom = await newRoom.save();
    res.status(201).json({ message: 'Room added successfully', room: savedRoom });
  } catch (err) {
    res.status(400).json({ message: 'Failed to add room', error: err.message });
  }
});

// Update a room (admin functionality)
router.put('/rooms/:id', async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }
    
    res.json({ message: 'Room updated successfully', room: updatedRoom });
  } catch (err) {
    res.status(400).json({ message: 'Failed to update room', error: err.message });
  }
});

// Delete a room (admin functionality)
router.delete('/rooms/:id', async (req, res) => {
  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    
    if (!deletedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }
    
    res.json({ message: 'Room deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router; 