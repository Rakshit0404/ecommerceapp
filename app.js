const express = require('express');
const app = express();
const path = require('path');


app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'views/layouts')));

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(3000, (req, res)=>{
    console.log("server started");
})