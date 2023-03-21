"use strict";

var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var countrySchema = mongoose.Schema({
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
countrySchema.plugin(uniqueValidator);
mongoose.pluralize(null); // Disabling making table name plural

module.exports = mongoose.model('country_master', countrySchema);