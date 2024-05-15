const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.sendFile('./views/home.html', { root : __dirname })
})

app.get('/about',(req,res) => {
    res.sendFile('./views/about.html', { root : __dirname })
})

app.get('/contact',(req,res) => {
    res.sendFile('./views/contact.html', { root : __dirname })
})


app.listen(3000,() => {
    console.log('app is running on port 3000')
})