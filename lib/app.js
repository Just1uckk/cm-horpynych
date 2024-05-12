"use strict";

var _calculateUserCommission = require("./modules/calculateUserCommission");
var _modelAction = require("./states/models/modelAction");
var _jsonParseUtil = require("./utils/jsonParseUtil");
(async function app() {
  await (0, _modelAction.ModelAction)();
  //Add module structure
  const inputData = await (0, _jsonParseUtil.jsonParseUtil)(process.argv[2]);
  (0, _calculateUserCommission.calculateUserCommission)(inputData);
})();