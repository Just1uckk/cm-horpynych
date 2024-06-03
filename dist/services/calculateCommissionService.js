"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateCommissionService = void 0;
class _CalculateCommissionService {
    getCommission(cash, commissionPercentage) {
        const commissionFee = (cash / 100) * commissionPercentage;
        const centsPerEuro = 100;
        return Math.ceil(commissionFee * centsPerEuro) / centsPerEuro;
    }
}
exports.CalculateCommissionService = new _CalculateCommissionService();
