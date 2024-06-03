"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComissionFeesModule = void 0;
const api_1 = require("../api/api");
const constants_1 = require("../constants/constants");
const modelState_1 = require("../states/models/modelState");
function getComissionFeesModule() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const modelsName = {
                0: constants_1.COMMISION_TYPE.cashInNatural,
                1: constants_1.COMMISION_TYPE.cashOutNatural,
                2: constants_1.COMMISION_TYPE.cashOutJuridical,
            };
            const commisionsData = yield Promise.all([
                api_1.Api.getCashIn(),
                api_1.Api.getCashOutNatural(),
                api_1.Api.getCashOutJuridical(),
            ]);
            commisionsData.forEach((data, index) => modelState_1.ModelState.set(modelsName[index], data));
        }
        catch (e) {
            console.log('Something went wrong with getting models (ModelAction).');
        }
    });
}
exports.getComissionFeesModule = getComissionFeesModule;
