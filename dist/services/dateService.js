"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateService = void 0;
const date_fns_1 = require("date-fns");
class _DateService {
    getIsThisWeek(previousDate, currentDate) {
        const previous = new Date(previousDate);
        const current = new Date(currentDate);
        return (0, date_fns_1.getISOWeek)(previous) === (0, date_fns_1.getISOWeek)(current);
    }
}
exports.DateService = new _DateService();
