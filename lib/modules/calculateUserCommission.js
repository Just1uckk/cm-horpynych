"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateUserCommission = calculateUserCommission;
var _commissionManager = require("../services/commissions/commissionManager");
var _outputService = require("../services/outputService");
function calculateUserCommission(data) {
  if (data) {
    const commissionList = data.map(transferInformation => new _commissionManager.CommissionManager(transferInformation).calculate());
    _outputService.outputService.outputInConsole(commissionList);
  }
}