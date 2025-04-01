const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  phone: {
    type: String,
    trim: true
  },
  checkIn: {
    type: Date,
    required: true
  },
  checkOut: {
    type: Date,
    required: true
  },
  totalCost: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['Confirmed', 'Pending', 'Cancelled'],
    default: 'Confirmed'
  },
  specialRequests: {
    type: String,
    trim: true
  },
  numberOfGuests: {
    type: Number,
    default: 1,
    min: 1
  }
}, {
  timestamps: true
});

// Pre-save middleware to validate check-in and check-out dates
bookingSchema.pre('save', function(next) {
  if (this.checkIn >= this.checkOut) {
    const err = new Error('Check-out date must be after check-in date');
    return next(err);
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema); 