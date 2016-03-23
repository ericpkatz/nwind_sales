var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());


app.use('/api/employees', require('./routes/employees'));

module.exports = app;
