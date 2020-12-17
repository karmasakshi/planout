var express = require('express');
var configRouter = require('./routes/index');
var cors = require('cors')

var app = express();

app.use(cors())
app.use(express.json());

app.use('/', configRouter);

module.exports = app;
