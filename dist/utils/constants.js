"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  ERRORS: {
    DEFAULT_ERROR: "internal server error"
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
    }
  },
  STATUS_CODES: {
    USER_SET_PASSWORD_ALREADY: 450,
    USER_ACTIVE_SET_PASSWORD: 451,
    VISITOR_WITH_NAME_EXISTS: 452,
    COUNTRY_WITH_NAME_EXISTS: 453,
    CITY_WITH_NAME_EXISTS: 454
  }
};
exports["default"] = _default;