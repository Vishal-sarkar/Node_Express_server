const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send("getting root");
})

app.get('/profile', (req, res) => {
    res.send("getting profile");
})


app.post("/profile",(req, res) => {
    console.log(req.body); 
    res.send('Success');
})

app.listen(3000);