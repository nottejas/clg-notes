const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.get('/query-form', (req, res) => {
    res.sendFile(__dirname + '/query.html');
  });
  
  app.post('/query', (req, res) => {
    const query = req.body.query;
    fs.appendFileSync("query.txt", query + "\n");
    res.send("Query saved to file.");
  });
  

app.listen(3000, ()=> console.log('Started on 3000'))