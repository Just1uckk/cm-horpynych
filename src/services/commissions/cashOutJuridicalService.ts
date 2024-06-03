import { getCashOutJuridicalDto } from '../../api/api';
import { COMMISION_TYPE } from '../../constants/constants';
import { ModelState } from '../../states/models/modelState';
import { inputDataDto } from '../../utils/parseJsonFile';
import { CalculateCommissionService } from '../calculateCommissionService';

export class CashOutJuridicalService {
  private transfer: inputDataDto
  private config: getCashOutJuridicalDto
  
  constructor(transfer: inputDataDto) {
    this.config = ModelState.get(COMMISION_TYPE.cashOutJuridical) as getCashOutJuridicalDto;
    this.transfer = transfer;
  }

  getCommission(): number {
    const { getCommission } = CalculateCommissionService;
    const commission = getCommission(
      this.transfer.operation.amount,
      this.config.percents,
    );
    if (commission < this.config.min.amount) return this.config.min.amount;
    return commission;
  }
}
