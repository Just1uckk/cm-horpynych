"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComissionFeesModule = getComissionFeesModule;
var _api = require("../api/api");
var _constants = require("../constants/constants");
var _modelState = require("../states/models/modelState");
async function getComissionFeesModule() {
  try {
    const modelsName = {
      0: _constants.COMMISION_TYPE.cashInNatural,
      1: _constants.COMMISION_TYPE.cashOutNatural,
      2: _constants.COMMISION_TYPE.cashOutJuridical
    };
    const commisionsData = await Promise.all([_api.Api.getCashIn(), _api.Api.getCashOutNatural(), _api.Api.getCashOutJuridical()]);
    commisionsData.forEach((data, index) => _modelState.ModelState.set(modelsName[index], data));
  } catch (e) {
    console.log('Something went wrong with getting models (ModelAction).');
  }
}