"use strict";

var _apiResponsesModule = require("./modules/apiResponsesModule");
var _calculateUserCommissionModule = require("./modules/calculateUserCommissionModule");
(async function app() {
  await (0, _apiResponsesModule.apiResponseModule)();
  await (0, _calculateUserCommissionModule.calculateUserCommissionModule)();
})();