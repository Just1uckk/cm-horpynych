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
        this.strategies = {
            [constants_1.COMMISION_TYPE.cashInNatural]: new cashInNaturalService_1.CashInNaturalService(transfer),
            [constants_1.COMMISION_TYPE.cashInJuridical]: new cashInNaturalService_1.CashInNaturalService(transfer),
            [constants_1.COMMISION_TYPE.cashOutNatural]: new cashOutNaturalService_1.CashOutNaturalService(transfer),
            [constants_1.COMMISION_TYPE.cashOutJuridical]: new cashOutJuridicalService_1.CashOutJuridicalService(transfer),
        };
    }
    calculate() {
        if (this.transfer.operation.currency !== 'EUR') {
            return { error: 'Only supported currency is EUR' };
        }
        const operationType = constants_1.OPERATION_TYPE[this.transfer.type];
        const userType = operationType[this.transfer.user_type];
        const situation = this.strategies[userType];
        return { commission: situation.getCommission() };
    }
}
exports.CommissionManager = CommissionManager;
