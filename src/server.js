const express = require('express');
const path = require('path');
const ejs = require('ejs');
const axios = require('axios');
const { dir } = require('console');

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '../views'));

const staticPath = path.join(__dirname,'../public');

app.use(express.static(staticPath))

app.get("/",(req,res) =>{
    res.render('index');
});

app.get("/weather",(req,res) =>{
    res.render('weather');
})

app.listen(port,(req,res)=>{
    console.log(`server running on port ${port}`);
});