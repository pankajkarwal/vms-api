"use strict";

var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var citySchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true
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
citySchema.plugin(uniqueValidator);
mongoose.pluralize(null); // Disabling making table name plural

module.exports = mongoose.model('city_master', citySchema);