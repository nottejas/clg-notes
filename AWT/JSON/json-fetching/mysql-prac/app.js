const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// DB Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // your password
  database: 'attendance_db', // e.g., attendance_db
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from('root')
  }
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});
