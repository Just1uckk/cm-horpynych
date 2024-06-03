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
exports.calculateUserCommissionModule = void 0;
const commissionManager_1 = require("../services/commissions/commissionManager");
const parseJsonFile_1 = require("../utils/parseJsonFile");
function calculateUserCommissionModule() {
    return __awaiter(this, void 0, void 0, function* () {
        const path = process.argv[2];
        const inputData = yield (0, parseJsonFile_1.parseJsonFile)(path);
        const commissionList = inputData.map((transferInformation) => new commissionManager_1.CommissionManager(transferInformation).calculate());
        return commissionList;
    });
}
exports.calculateUserCommissionModule = calculateUserCommissionModule;
