var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../bower_components')));
app.use(express.static(path.join(__dirname, '../browser')));
app.use(bodyParser.json());

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, '../browser/index.html'));
});


app.use('/api/employees', require('./routes/employees'));

module.exports = app;
