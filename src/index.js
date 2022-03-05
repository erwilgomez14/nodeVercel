const express = require('express');
const req = require('express/lib/request');
const app = express();
const path = require('path');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

module.exports = app;