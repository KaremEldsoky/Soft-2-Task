const express = require('express')

const app  = express();

const ts = (req,res)=>{
    res.send("<li>Karem</li> <li>Eldsoky</li> <li>Mohamed</li><li>Abo Hanfy</li>")
}
 
app.get('/students',ts)

app.listen(5000)