"use strict";

require("dotenv").config();
require("./config/database").connect();
var express = require("express");
var app = express();
app.use(express.json());

// Logic goes here

module.exports = app;