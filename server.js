var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost:27017/inspiro');
mongoose.connection.on('connected', function () {
  console.log('Database Connected');
});
mongoose.connection.on('error', function (error) {
  console.log('Error To Connecting Database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes')(app);

app.listen(3000, function () {
  console.log('Server Running on PORT di ' + 3000);
});