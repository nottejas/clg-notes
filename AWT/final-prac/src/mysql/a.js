const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'awt'
});

db.connect((err) => {
  if (err) {
    console.log('Not connected');
  } else {
    console.log('Connected to MySQL');
  }
});

/* 📌 GET employees with absent_days > 5 in April
   📬 Test in Postman: 
   Method: GET 
   URL: http://localhost:5000/attendance 
*/
app.get('/attendance', (req, res) => {
  db.query("SELECT * FROM employee WHERE absent_days > 5 AND month='April'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

/* 📌 GET restaurants with rating > 5
   📬 Test in Postman:
   Method: GET 
   URL: http://localhost:5000/restaurant 
*/
app.get('/restaurant', (req, res) => {
  db.query("SELECT * FROM restaurant WHERE rating > 5", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

/* 📌 UPDATE property prices by +10% in Mum city
   📬 Test in Postman:
   Method: PUT 
   URL: http://localhost:5000/update-prices 
   (no body needed)
*/
app.put('/update-prices', (req, res) => {
  db.query("UPDATE properties SET price = price * 1.10 WHERE city='Mum'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

/* 📌 GET all properties
   📬 Test in Postman:
   Method: GET 
   URL: http://localhost:5000/properties 
*/
app.get('/properties', (req, res) => {
  db.query("SELECT * FROM properties", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

/* 📌 DELETE properties where price < 1 crore
   📬 Test in Postman:
   Method: DELETE 
   URL: http://localhost:5000/delete-cheap 
*/
app.delete('/delete-cheap', (req, res) => {
  db.query("DELETE FROM properties WHERE price < 10000000", (err, result) => {
    if (err) throw err;
    res.send('Deleted properties under 1cr ✅');
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
