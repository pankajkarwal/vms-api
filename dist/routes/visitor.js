"use strict";

var _VisitorController = _interopRequireDefault(require("../controllers/VisitorController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var express = require('express');
var app = require("../app");
var auth = require("../middleware/auth");
var router = express.Router();
var visitorController = new _VisitorController["default"]();
router.get('/fetch', visitorController.fetchVisitor);
router.post('/add', visitorController.saveVisitor);
router.put('/update', visitorController.updateVisitor);
router.get('/get/:id', visitorController.getVisitor);
router["delete"]('/delete/:id', visitorController.deleteVisitor);
module.exports = router;