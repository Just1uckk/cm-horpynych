"use strict";

var _apiResponsesModule = require("./modules/apiResponsesModule");
var _calculateUserCommissionModule = require("./modules/calculateUserCommissionModule");
var _outputInConsoleModule = require("./modules/outputInConsoleModule");
(async function app() {
  await (0, _apiResponsesModule.getComissionFeesModule)();
  const commission = await (0, _calculateUserCommissionModule.calculateUserCommissionModule)();
  (0, _outputInConsoleModule.outputInConsoleModule)(commission);
})();