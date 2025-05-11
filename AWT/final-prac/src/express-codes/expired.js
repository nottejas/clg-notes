const express = require("express");
const app = express();
app.use(express.json());

let bookings = [
  { id: 1, expiry_date: "2025-05-10" },
  { id: 2, expiry_date: "2025-05-12" },
];

app.delete("/removebookings", (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  bookings = bookings.filter((b) => b.expiry_date >= today);
  res.json(bookings);
});

app.listen(5000, () => console.log("server running"));

// test
// http://localhost:5000/removebookings