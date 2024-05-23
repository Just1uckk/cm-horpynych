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
      [_constants.COMMISION_TYPE.cashInNatural]: new _cashInNaturalService.CashInNaturalService(transfer),
      [_constants.COMMISION_TYPE.cashInJuridical]: new _cashInNaturalService.CashInNaturalService(transfer),
      [_constants.COMMISION_TYPE.cashOutNatural]: new _cashOutNaturalService.CashOutNaturalService(transfer),
      [_constants.COMMISION_TYPE.cashOutJuridical]: new _cashOutJuridicalService.CashOutJuridicalService(transfer)
    };
  }
  calculate() {
    if (this.transfer.operation.currency !== 'EUR') {
      return {
        error: 'Only supported currency is EUR'
      };
    }
    const situation = this.strategies[_constants.OPERATION_TYPE[this.transfer.type][this.transfer.user_type]];
    return {
      commission: situation.getCommission()
    };
  }
}
exports.CommissionManager = CommissionManager;