const express = require('express')
const app = express()
app.use(express.json())

let speakers = []

app.post('/addspeaker', (req, res) => {
    speakers.push(req.body);
    res.json(speakers);
})

app.listen(5000, ()=> console.log('server running'));


// test
// http://localhost:5000/addspeaker