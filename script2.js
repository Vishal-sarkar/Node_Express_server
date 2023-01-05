const express = require('express');
const app = express();

app.use((reeq, res, next)=>{
    console.log("<h1>Helllooooo!!</h1>");
    next();
})


app.get("/profile",(req, res) => {
    res.send("Test Test");
})
app.listen(3000);