"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateService = void 0;
var _dateFns = require("date-fns");
class DateValidation {
  getIsThisWeek(previousDate, currentDate) {
    const previous = new Date(previousDate);
    const current = new Date(currentDate);
    return (0, _dateFns.getISOWeek)(previous) === (0, _dateFns.getISOWeek)(current);
  }
}
const DateService = exports.DateService = new DateValidation();