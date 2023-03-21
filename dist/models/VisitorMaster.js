"use strict";

var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var visitorSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true
  },
  contactNo: {
    type: Number,
    trim: true,
    require: true
  },
  address: {
    type: String,
    trim: true,
    "default": 'ABC'
  },
  created_at: {
    type: Date,
    "default": Date.now
  },
  updated_at: {
    type: Date,
    required: false
  }
});
visitorSchema.plugin(uniqueValidator);
mongoose.pluralize(null);
module.exports = mongoose.model('visitor_master', visitorSchema);