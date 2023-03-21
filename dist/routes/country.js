"use strict";

var _CountryController = _interopRequireDefault(require("../controllers/CountryController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var express = require('express');
var router = express.Router();
var visitorController = new _CountryController["default"]();
router.get('/fetch', visitorController.fetchCountry);
router.post('/add', visitorController.saveCountry);
router.put('/update', visitorController.updateCountry);
router.get('/get/:id', visitorController.getCountry);
router["delete"]('/delete/:id', visitorController.deleteCountry);
module.exports = router;