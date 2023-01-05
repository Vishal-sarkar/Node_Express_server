const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


app.get("/:id",(req, res) => {
    // console.log(req.query); 
    console.log(req.header); 
    // console.log(req.params); 
    res.send('Success');
})

app.listen(3000);