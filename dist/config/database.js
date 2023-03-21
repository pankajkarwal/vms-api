"use strict";

var mongoose = require("mongoose");
var MONGO_URI = process.env.MONGO_URI;
exports.connect = function () {
  // Connecting to the database
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(function () {
    console.log("Successfully connected to database");
  })["catch"](function (error) {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });
};