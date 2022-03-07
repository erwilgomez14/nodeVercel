const express = require('express');
const req = require('express/lib/request');
const app = express();
const path = require('path');

//settings

app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use(require('./routes/index'));

module.exports = app;