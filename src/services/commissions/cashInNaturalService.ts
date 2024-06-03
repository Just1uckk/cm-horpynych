import { getCashInDto, getCashOutJuridicalDto, getCashOutNaturalDto } from '../../api/api';
import { COMMISION_TYPE } from '../../constants/constants';
import { ModelState } from '../../states/models/modelState';
import { inputDataDto } from '../../utils/parseJsonFile';
import { CalculateCommissionService } from '../calculateCommissionService';

export class CashInNaturalService {
  private transfer: inputDataDto
  private config: getCashInDto

  constructor(transfer: inputDataDto) {
    this.config = ModelState.get(COMMISION_TYPE.cashInNatural) as getCashInDto;
    this.transfer = transfer;
  }

  getCommission(): number {
    const { getCommission } = CalculateCommissionService;
    const commission = getCommission(
      this.transfer.operation.amount,
      this.config.percents,
    );
    if (commission > this.config.max.amount) return this.config.max.amount;
    return commission;
  }
}
