"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWeeklyLimitService = void 0;
const dateService_1 = require("./dateService");
class UserWeeklyLimitService {
    constructor(user, currentDate, weekLimit) {
        this.user = user;
        this.weekLimit = weekLimit;
        this.currentDate = currentDate;
    }
    getCurrentLimit(currentDate) {
        var _a, _b;
        if (!currentDate || !this.user || Object.keys(this.user).length === 0)
            return false;
        if ('transaction' in this.user) {
            return dateService_1.DateService.getIsThisWeek((_a = this.user) === null || _a === void 0 ? void 0 : _a.transaction[((_b = this.user) === null || _b === void 0 ? void 0 : _b.transaction.length) - 1], currentDate);
        }
        return false;
    }
    currentLimit() {
        if (!this.user || Object.keys(this.user).length === 0)
            return this.weekLimit;
        if (this.getCurrentLimit(this.currentDate) && 'freeCharge' in this.user) {
            return this.user.freeCharge;
        }
        return this.weekLimit;
    }
}
exports.UserWeeklyLimitService = UserWeeklyLimitService;
