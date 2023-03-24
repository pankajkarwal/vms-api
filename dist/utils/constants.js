"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  ERRORS: {
    DEFAULT_ERROR: "internal server error",
    ALL_INPUTS_REQUIRED: "All input is required",
    USER_EXISTS_LOGIN: "User Already Exist. Please Login",
    TOKEN_REQUIRED: "A token is required for authentication",
    TOKEN_INVALID: "Invalid Token"
  },
  SECURITY: {
    HASH_ROUND_STRING_LENGTH: 10,
    TOKEN_EXPIRE_DURATION: '2h'
  },
  MESSAGES: {
    VISITOR: {
      NAME_EXISTS: "Visitor already exists with this name!",
      ADD: "Visitor added successfully",
      DELETE: "Visitor deleted successfully",
      UPDATE: "Visitor updated successfully"
    },
    COUNTRY: {
      NAME_EXISTS: "Country already exists with this name!",
      ADD: "Country added successfully",
      DELETE: "Country deleted successfully",
      UPDATE: "Country updated successfully"
    },
    CITY: {
      NAME_EXISTS: "City already exists with this name!",
      ADD: "City added successfully",
      DELETE: "City deleted successfully",
      UPDATE: "City updated successfully"
    },
    USER: {
      NAME_EXISTS: "User already exists with this name!",
      ADD: "User added successfully",
      DELETE: "User deleted successfully",
      UPDATE: "User updated successfully"
    }
  },
  STATUS_CODES: {
    USER_SET_PASSWORD_ALREADY: 450,
    USER_ACTIVE_SET_PASSWORD: 451,
    VISITOR_WITH_NAME_EXISTS: 452,
    COUNTRY_WITH_NAME_EXISTS: 453,
    CITY_WITH_NAME_EXISTS: 454,
    USER_WITH_NAME_EXISTS: 455
  }
};
exports["default"] = _default;