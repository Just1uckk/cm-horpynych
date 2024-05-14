"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiResponseModule = apiResponseModule;
var _requests = require("../api/requests");
var _constants = require("../constants/constants");
var _modelState = require("../states/models/modelState");
async function apiResponseModule() {
  try {
    const modelsName = {
      0: _constants.SITUATION_MODEL.cashInNatural,
      1: _constants.SITUATION_MODEL.cashOutNatural,
      2: _constants.SITUATION_MODEL.cashOutJuridical
    };
    const models = await Promise.all([_requests.RequestsApi.getCashIn(), _requests.RequestsApi.getCashOutNatural(), _requests.RequestsApi.getCashOutJuridical()]);
    models.forEach((model, index) => _modelState.ModelState.set(modelsName[index], model));
  } catch (e) {
    console.log('Something went wrong with getting models (ModelAction).');
  }
}