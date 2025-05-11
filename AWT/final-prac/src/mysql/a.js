const express = require('express')
const mysql = require('mysql2')
const app = express();
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'awt'
})

db.connect((err) => {
    if(err){
        console.log('Not');
    }else{
        console.log('connected');
    }
})

app.get('/attendance', (req, res) => {
    db.query("SELECT * FROM employee where absent_days > 5 and month='April'", (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result)            
        }
    })
})

app.get('/restaurant', (req, res) => {
    db.query("SELECT * FROM restaurant where rating > 5", (err, result)=>{
        if (err) throw err;
        res.json(result)
    })
})

app.put('/update-prices', (req, res) => {
    db.query("UPDATE properties SET price = price * 1.10 WHERE city='Mum'", (err, result) => {
      if (err) {
        console.log(err);
      }else{
        res.json(result)
      }
    });
  });
// Display entire table
app.get('/properties', (req, res) => {
    db.query("SELECT * FROM properties", (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  
  // Delete properties where price < 1cr (10000000)
  app.delete('/delete-cheap', (req, res) => {
    db.query("DELETE FROM properties WHERE price < 10000000", (err, result) => {
      if (err) throw err;
      res.send('Deleted properties under 1cr ✅');
    });
  });

app.listen(5000, () => console.log('Server running'));