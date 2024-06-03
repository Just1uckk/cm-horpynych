"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputService = void 0;
class _OutputService {
    outputInConsole(commissionData) {
        commissionData.forEach((commission) => {
            var _a;
            commission.error
                ? console.log(commission.error)
                : console.log((_a = commission === null || commission === void 0 ? void 0 : commission.commission) === null || _a === void 0 ? void 0 : _a.toFixed(2));
        });
    }
}
exports.OutputService = new _OutputService();
