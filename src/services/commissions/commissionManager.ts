import { COMMISION_TYPE, OPERATION_TYPE } from '../../constants/constants';
import { CashInNaturalService } from './cashInNaturalService';
import { CashOutNaturalService } from './cashOutNaturalService';
import { CashOutJuridicalService } from './cashOutJuridicalService';

export class CommissionManager {
  constructor(transfer) {
    this.transfer = transfer;
    this.strategies = {
      [COMMISION_TYPE.cashInNatural]: new CashInNaturalService(transfer),
      [COMMISION_TYPE.cashInJuridical]: new CashInNaturalService(transfer),
      [COMMISION_TYPE.cashOutNatural]: new CashOutNaturalService(transfer),
      [COMMISION_TYPE.cashOutJuridical]: new CashOutJuridicalService(transfer),
    };
  }

  calculate() {
    if (this.transfer.operation.currency !== 'EUR') {
      return { error: 'Only supported currency is EUR' };
    }
    const situation =
      this.strategies[
        OPERATION_TYPE[this.transfer.type][this.transfer.user_type]
      ];
    return { commission: situation.getCommission() };
  }
}
