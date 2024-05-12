"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommissionManager = void 0;
var _constants = require("../../constants/constants");
var _cashInNaturalService = require("./cashInNaturalService");
var _cashOutNaturalService = require("./cashOutNaturalService");
var _cashOutJuridicalService = require("./cashOutJuridicalService");
class CommissionManager {
  constructor(transfer) {
    this.transfer = transfer;
    this.strategies = {
      cashInNatural: new _cashInNaturalService.CashInNaturalService(transfer),
      cashInJuridical: new _cashInNaturalService.CashInNaturalService(transfer),
      cashOutNatural: new _cashOutNaturalService.CashOutNaturalService(transfer),
      cashOutJuridical: new _cashOutJuridicalService.CashOutJuridicalService(transfer)
    };
  }
  calculate() {
    if (this.transfer.operation.currency !== 'EUR') {
      return {
        error: 'Only supported currency is EUR'
      };
    }
    const situation = this.strategies[_constants.SITUATION_METHODS[this.transfer.type][this.transfer.user_type]];
    return {
      commission: situation.getCommission()
    };
  }
}
exports.CommissionManager = CommissionManager;