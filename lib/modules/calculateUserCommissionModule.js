"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateUserCommissionModule = calculateUserCommissionModule;
var _commissionManager = require("../services/commissions/commissionManager");
var _outputService = require("../services/outputService");
var _jsonParseUtil = require("../utils/jsonParseUtil");
async function calculateUserCommissionModule() {
  const inputData = await (0, _jsonParseUtil.jsonParseUtil)(process.argv[2]);
  if (inputData) {
    const commissionList = inputData.map(transferInformation => new _commissionManager.CommissionManager(transferInformation).calculate());
    _outputService.OutputService.outputInConsole(commissionList);
  }
}