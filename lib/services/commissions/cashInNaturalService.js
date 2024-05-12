"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CashInNaturalService = void 0;
var _constants = require("../../constants/constants");
var _modelState = require("../../states/models/modelState");
var _calculateCommissionService = require("../calculateCommissionService");
class CashInNaturalService {
  constructor(transfer) {
    this.config = _modelState.ModelState.get(_constants.SITUATION_MODEL.cashInNatural);
    this.transfer = transfer;
  }
  getCommission() {
    const {
      getCommission
    } = _calculateCommissionService.CalculateCommissionService;
    const commission = getCommission(this.transfer.operation.amount, this.config.percents);
    if (commission > this.config.max.amount) return this.config.max.amount;
    return commission;
  }
}
exports.CashInNaturalService = CashInNaturalService;