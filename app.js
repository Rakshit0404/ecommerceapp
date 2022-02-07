const express = require('express');
const app = express();
const path = require('path');
const ejsmate = require('ejs-mate');
const methodOverride = require('method-override');

app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render('layouts/home.ejs');
})

app.listen(3000, (req, res)=>{
    console.log("server started");
})