"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outputInConsoleModule = outputInConsoleModule;
var _outputService = require("../services/outputService");
async function outputInConsoleModule(commission) {
  _outputService.OutputService.outputInConsole(commission);
}