"use strict";

var jwt = require("jsonwebtoken");
var _require = require("../utils/constants"),
  constants = _require["default"];
var config = process.env;
var verifyToken = function verifyToken(req, res, next) {
  var authorizationHeader = req.headers.authorization;
  var token;
  if (authorizationHeader) {
    token = req.headers.authorization.split(' ')[1]; // Bearer <token>
  }

  if (!token) {
    return res.status(403).send(constants.ERRORS.TOKEN_REQUIRED);
  }
  try {
    var decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send(constants.ERRORS.TOKEN_INVALID);
  }
  return next();
};
module.exports = verifyToken;