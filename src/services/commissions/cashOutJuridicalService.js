import { SITUATION_MODEL } from '../../constants/constants';
import { ModelState } from '../../states/models/modelState';
import { CalculateCommissionService } from '../calculateCommissionService';

export class CashOutJuridicalService {
  constructor(transfer) {
    this.config = ModelState.get(SITUATION_MODEL.cashOutJuridical);
    this.transfer = transfer;
  }

  getCommission() {
    const { getCommission } = CalculateCommissionService;
    const commission = getCommission(
      this.transfer.operation.amount,
      this.config.percents,
    );
    if (commission < this.config.min.amount) return this.config.min.amount;
    return commission;
  }
}
