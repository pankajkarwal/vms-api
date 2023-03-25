"use strict";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var dotenv = require('dotenv');
dotenv.config();
var http = require("http");
var app = require("./app");
var server = http.createServer(app);
var API_PORT = process.env.API_PORT;
var port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, function () {
  console.log("Server running on port ".concat(port));
});
var nonAuthURL = ['/user/login', '/user/add'];
var indexRouter = require('./routes/Index');
var visitorRouter = require('./routes/visitor');
var countryRouter = require('./routes/country');
var cityRouter = require('./routes/city');
var userRouter = require('./routes/user');
var auth = require("./middleware/auth");
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  if (req.get("x-amz-sns-message-type")) {
    req.headers["content-type"] = "application/json";
  }
  next();
});
app.use(cors({
  origin: "*",
  methods: ["PUT", "POST", "GET", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept, Authorization, X-IDENTITY"]
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(function (req, res, next) {
  if (!nonAuthURL.includes(req.url) && (req === null || req === void 0 ? void 0 : req.headers["access-control-request-headers"]) != 'authorization') {
    auth(req, res, next);
  } else {
    next();
  }
});
app.use('/visitors', visitorRouter);
app.use('/country', countryRouter);
app.use('/city', cityRouter);
app.use('/user', userRouter);
app.use('/', indexRouter);
module.exports = app;