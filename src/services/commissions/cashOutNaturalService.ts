import { getCashOutNaturalDto } from '../../api/api';
import { COMMISION_TYPE } from '../../constants/constants';
import { ModelState } from '../../states/models/modelState';
import { UserState } from '../../states/user/userState';
import { inputDataDto } from '../../utils/parseJsonFile';
import { CalculateCommissionService } from '../calculateCommissionService';
import { UserWeeklyLimitService } from '../userWeeklyLimitService ';

export class CashOutNaturalService {
  private transfer: inputDataDto
  private config: getCashOutNaturalDto

  constructor(transfer: inputDataDto) {
    this.config = ModelState.get(COMMISION_TYPE.cashOutNatural) as getCashOutNaturalDto;
    this.transfer = transfer;
  }

  getCommission(): number {
    const { getCommission } = CalculateCommissionService;
    const user = UserState.getUser(this.transfer.user_id);
    const operationAmount = this.transfer.operation.amount;

    const limit = new UserWeeklyLimitService(
      user,
      this.transfer.date,
      this.config.week_limit.amount,
    ).currentLimit();

    const excessAmount  = operationAmount - limit;
    const freeLimit = limit - operationAmount;
    const isOverLimit = operationAmount > limit;

    UserState.addUser(
      this.transfer.user_id,
      this.transfer.date,
      isOverLimit ? 0 : freeLimit,
    );

    const commissionInformation = {
      excessAmount : isOverLimit ? excessAmount  : freeLimit,
      percent: isOverLimit ? this.config.percents : 0,
    };

    return getCommission(
      commissionInformation.excessAmount ,
      commissionInformation.percent,
    );
  }
}
