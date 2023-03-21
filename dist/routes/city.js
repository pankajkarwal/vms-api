"use strict";

var _CityController = _interopRequireDefault(require("../controllers/CityController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var express = require('express');
var router = express.Router();
var cityController = new _CityController["default"]();
router.get('/fetch', cityController.fetchCity);
router.post('/add', cityController.saveCity);
router.put('/update', cityController.updateCity);
router.get('/get/:id', cityController.getCity);
router["delete"]('/delete/:id', cityController.deleteCity);
module.exports = router;