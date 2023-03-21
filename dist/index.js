"use strict";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');

// const dotenv = require('dotenv');
// dotenv.config()

var http = require("http");
var app = require("./app");
var server = http.createServer(app);
var API_PORT = process.env.API_PORT;
var port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, function () {
  console.log("Server running on port ".concat(port));
});
var indexRouter = require('./routes/Index');
var visitorRouter = require('./routes/visitor');
var countryRouter = require('./routes/country');
var cityRouter = require('./routes/city');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/visitors', visitorRouter);
app.use('/country', countryRouter);
app.use('/city', cityRouter);
module.exports = app;