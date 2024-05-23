import { OPERATION_TYPE } from '../../constants/constants';
import { CashInNaturalService } from './cashInNaturalService';
import { CashOutNaturalService } from './cashOutNaturalService';
import { CashOutJuridicalService } from './cashOutJuridicalService';

export class CommissionManager {
  constructor(transfer) {
    this.transfer = transfer;
    this.strategies = {
      cashInNatural: new CashInNaturalService(transfer),
      cashInJuridical: new CashInNaturalService(transfer),
      cashOutNatural: new CashOutNaturalService(transfer),
      cashOutJuridical: new CashOutJuridicalService(transfer),
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
