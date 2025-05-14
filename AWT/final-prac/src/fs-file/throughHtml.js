const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/throughHtml.html')
})

app.post('/save', (req, res)=>{
    const text = req.body.text;
    fs.appendFileSync("throughHtml.txt", text + "\n")
    res.send("Text saved to file")
})

app.listen(3000, ()=> console.log('Started on 3000'))