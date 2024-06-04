"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionManager = void 0;
const constants_1 = require("../../constants/constants");
const cashInNaturalService_1 = require("./cashInNaturalService");
const cashOutNaturalService_1 = require("./cashOutNaturalService");
const cashOutJuridicalService_1 = require("./cashOutJuridicalService");
class CommissionManager {
    constructor(transfer) {
        this.transfer = transfer;
    }
    getStrategy() {
        const operationType = constants_1.OPERATION_TYPE[this.transfer.type];
        const userType = operationType[this.transfer.user_type];
        const strategyMap = {
            [constants_1.COMMISION_TYPE.cashInNatural]: cashInNaturalService_1.CashInNaturalService,
            [constants_1.COMMISION_TYPE.cashInJuridical]: cashInNaturalService_1.CashInNaturalService,
            [constants_1.COMMISION_TYPE.cashOutNatural]: cashOutNaturalService_1.CashOutNaturalService,
            [constants_1.COMMISION_TYPE.cashOutJuridical]: cashOutJuridicalService_1.CashOutJuridicalService,
        };
        return strategyMap[userType];
    }
    calculate() {
        if (this.transfer.operation.currency !== 'EUR') {
            return { error: 'Only supported currency is EUR' };
        }
        const StrategyClass = this.getStrategy();
        if (!StrategyClass) {
            return { error: 'Unsupported operation type or user type' };
        }
        const strategyInstance = new StrategyClass(this.transfer);
        return { commission: strategyInstance.getCommission() };
    }
}
exports.CommissionManager = CommissionManager;
