const express = require('express');
const app = express();
const port = 8285
const path = require('path')
const hbs = require('hbs');


app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname+ '/public/views'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/public/partials');

app.get('/', (req, res) =>{
    res.render('disponibilidad')
})

app.listen(port, ()=>{
    console.log('listening on port')
})