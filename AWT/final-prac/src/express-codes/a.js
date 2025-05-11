const express = require('express');
const app = express();
app.use(express.json());

let speakers = [];
let bookings = [
  { id: 1, expiry_date: '2025-05-10' },
  { id: 2, expiry_date: '2025-05-12' }
];
let teachers = [];

// Speaker route
app.post('/addspeaker', (req, res) => {
  speakers.push(req.body);
  res.json(speakers);
});

// Remove expired bookings
app.delete('/removeExpired', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  bookings = bookings.filter(b => b.expiry_date >= today);
  res.json(bookings);
});

// Teacher route
app.post('/addteacher', (req, res) => {
  teachers.push(req.body);
  res.json(req.body);
});

app.listen(5000, () => console.log('Server running'));
