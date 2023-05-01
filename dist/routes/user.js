"use strict";

var _UserController = _interopRequireDefault(require("./../controllers/UserController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var express = require('express');
var router = express.Router();
var userController = new _UserController["default"]();
router.get('/fetch', userController.fetchUser);
router.post('/add', userController.saveUser);
router.put('/update', userController.updateUser);
router.get('/get/:id', userController.getUser);
router["delete"]('/delete/:id', userController.deleteUser);
router.post('/login', userController.loginUser);
module.exports = router;