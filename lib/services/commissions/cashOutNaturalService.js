"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CashOutNaturalService = void 0;
var _constants = require("../../constants/constants");
var _modelState = require("../../states/models/modelState");
var _userState = require("../../states/user/userState");
var _calculateCommissionService = require("../calculateCommissionService");
var _userService = require("../userService");
class CashOutNaturalService {
  constructor(transfer) {
    this.config = _modelState.ModelState.get(_constants.COMMISION_TYPE.cashOutNatural);
    this.transfer = transfer;
  }
  getCommission() {
    const {
      getCommission
    } = _calculateCommissionService.CalculateCommissionService;
    const user = _userState.UserState.getUser(this.transfer.user_id);
    const operationAmount = this.transfer.operation.amount;
    const limit = new _userService.UserService(user, this.transfer.date, this.config.week_limit.amount).currentLimit();
    const cash = operationAmount - limit;
    const freeLimit = limit - operationAmount;
    _userState.UserState.addUser(this.transfer.user_id, this.transfer.date, operationAmount > limit ? 0 : freeLimit);
    const commissionInformation = {
      cash: operationAmount > limit ? cash : freeLimit,
      percent: operationAmount > limit ? this.config.percents : 0
    };
    return getCommission(commissionInformation.cash, commissionInformation.percent);
  }
}
exports.CashOutNaturalService = CashOutNaturalService;