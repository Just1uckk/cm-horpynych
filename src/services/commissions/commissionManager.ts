import { COMMISION_TYPE, OPERATION_TYPE } from '../../constants/constants';
import { CashInNaturalService } from './cashInNaturalService';
import { CashOutNaturalService } from './cashOutNaturalService';
import { CashOutJuridicalService } from './cashOutJuridicalService';
import { inputDataDto } from '../../utils/parseJsonFile';
import { commissionDto } from 'src/modules/calculateUserCommissionModule';

export class CommissionManager {
  private transfer: inputDataDto
  private strategies: { [key: string]: any };

  constructor(transfer: inputDataDto) {
    this.transfer = transfer;
    this.strategies = {
      [COMMISION_TYPE.cashInNatural]: new CashInNaturalService(transfer),
      [COMMISION_TYPE.cashInJuridical]: new CashInNaturalService(transfer),
      [COMMISION_TYPE.cashOutNatural]: new CashOutNaturalService(transfer),
      [COMMISION_TYPE.cashOutJuridical]: new CashOutJuridicalService(transfer),
    };
  }

  calculate(): commissionDto {
    if (this.transfer.operation.currency !== 'EUR') {
      return { error: 'Only supported currency is EUR' };
    }
    const operationType = OPERATION_TYPE[this.transfer.type];
    const userType = operationType[this.transfer.user_type];
    const situation = this.strategies[userType];
    return { commission: situation.getCommission() };
  }
}
