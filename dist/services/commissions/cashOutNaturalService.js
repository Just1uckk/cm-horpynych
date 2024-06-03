"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashOutNaturalService = void 0;
const constants_1 = require("../../constants/constants");
const modelState_1 = require("../../states/models/modelState");
const userState_1 = require("../../states/user/userState");
const calculateCommissionService_1 = require("../calculateCommissionService");
const userWeeklyLimitService_1 = require("../userWeeklyLimitService ");
class CashOutNaturalService {
    constructor(transfer) {
        this.config = modelState_1.ModelState.get(constants_1.COMMISION_TYPE.cashOutNatural);
        this.transfer = transfer;
    }
    getCommission() {
        const { getCommission } = calculateCommissionService_1.CalculateCommissionService;
        const user = userState_1.UserState.getUser(this.transfer.user_id);
        const operationAmount = this.transfer.operation.amount;
        const limit = new userWeeklyLimitService_1.UserWeeklyLimitService(user, this.transfer.date, this.config.week_limit.amount).currentLimit();
        const excessAmount = operationAmount - limit;
        const freeLimit = limit - operationAmount;
        const isOverLimit = operationAmount > limit;
        userState_1.UserState.addUser(this.transfer.user_id, this.transfer.date, isOverLimit ? 0 : freeLimit);
        const commissionInformation = {
            excessAmount: isOverLimit ? excessAmount : freeLimit,
            percent: isOverLimit ? this.config.percents : 0,
        };
        return getCommission(commissionInformation.excessAmount, commissionInformation.percent);
    }
}
exports.CashOutNaturalService = CashOutNaturalService;
