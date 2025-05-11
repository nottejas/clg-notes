const express = require('express')
const app = express()
app.use(express.json())

let teachers = [];

app.post('/addteacher', (req, res) => {
    teachers.push(req.body);
    res.json(teachers)
})

app.listen(5000, ()=> {
    console.log('server lis');
})