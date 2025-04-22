const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// DB Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // your password
  database: '' // e.g., attendance_db
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});
