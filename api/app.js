var express = require('express');
var configRouter = require('./routes/index');

var app = express();

app.use(express.json());

app.use('/', configRouter);

module.exports = app;
