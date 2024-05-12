import { SITUATION_MODEL } from '../../constants/constants';
import { ModelState } from '../../states/models/modelState';
import { UserState } from '../../states/user/userState';
import { CalculateCommissionService } from '../calculateCommissionService';
import { UserService } from '../userService';

export class CashOutNaturalService {
  constructor(transfer) {
    this.config = ModelState.get(SITUATION_MODEL.cashOutNatural);
    this.transfer = transfer;
  }

  getCommission() {
    const { getCommission } = CalculateCommissionService;
    const user = UserState.getUser(this.transfer.user_id);
    const operationAmount = this.transfer.operation.amount;
    const limit = new UserService(
      user,
      this.transfer,
      this.config.week_limit.amount,
    ).currentLimit();
    const cash = operationAmount - limit;
    const freeLimit = limit - operationAmount;
    UserState.addUser(
      this.transfer.user_id,
      this.transfer.date,
      operationAmount > limit ? 0 : freeLimit,
    );
    const commissionInformation = {
      cash: operationAmount > limit ? cash : freeLimit,
      percent: operationAmount > limit ? this.config.percents : 0,
    };
    return getCommission(
      commissionInformation.cash,
      commissionInformation.percent,
    );
  }
}
