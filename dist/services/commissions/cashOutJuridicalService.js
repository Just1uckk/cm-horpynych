"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashOutJuridicalService = void 0;
const constants_1 = require("../../constants/constants");
const modelState_1 = require("../../states/models/modelState");
const calculateCommissionService_1 = require("../calculateCommissionService");
class CashOutJuridicalService {
    constructor(transfer) {
        this.config = modelState_1.ModelState.get(constants_1.COMMISION_TYPE.cashOutJuridical);
        this.transfer = transfer;
    }
    getCommission() {
        const { getCommission } = calculateCommissionService_1.CalculateCommissionService;
        const commission = getCommission(this.transfer.operation.amount, this.config.percents);
        if (commission < this.config.min.amount)
            return this.config.min.amount;
        return commission;
    }
}
exports.CashOutJuridicalService = CashOutJuridicalService;
