const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "awt",
});

db.connect((err) => {
  if (err) {
    console.log("Not connected");
  } else {
    console.log("Connected to MySQL");
  }
});

app.get('/properties', (req, res) => {
    console.log('sd', (err, result) => {
        if (err) throw err;
        res.json(result)
    });
    
})

app.listen(5000, () => console.log('Server running on port 5000'));
