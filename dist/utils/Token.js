"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTokenV2 = void 0;
var _constants = _interopRequireDefault(require("./constants"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var fs = require('fs');

// const generateTokenV2 = (payload, is_access_token)=> {
var generateTokenV2 = function generateTokenV2(payload) {
  // const expiresIn = is_access_token ? Number(process.env.ACCESS_TOKEN_TIMEOUT) : Number(process.env.REFRESH_TOKEN_TIMEOUT);
  // const options = {
  //     expiresIn: constants.SECURITY.TOKEN_EXPIRE_DURATION,
  //     issuer: process.env.JWT_HOST,
  //     algorithm: "RS256"
  // }
  // const privateKey = fs.readFileSync('src\\config\\private.pem', 'utf8');
  //const private_key = process.env.JWT_PRIVATE_KEY.replace(/\\n/gm, '\n')
  var token = _jsonwebtoken["default"].sign(payload, process.env.TOKEN_KEY, {
    expiresIn: _constants["default"].SECURITY.TOKEN_EXPIRE_DURATION
  });
  return token;
};
exports.generateTokenV2 = generateTokenV2;