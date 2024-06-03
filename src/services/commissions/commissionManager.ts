import { COMMISION_TYPE, OPERATION_TYPE } from '../../constants/constants';
import { CashInNaturalService } from './cashInNaturalService';
import { CashOutNaturalService } from './cashOutNaturalService';
import { CashOutJuridicalService } from './cashOutJuridicalService';
import { inputDataDto } from '../../utils/parseJsonFile';
import { commissionDto } from 'src/modules/calculateUserCommissionModule';

type StrategyClass = 
  | typeof CashInNaturalService
  | typeof CashOutNaturalService
  | typeof CashOutJuridicalService;

export class CommissionManager {
  private transfer: inputDataDto;

  constructor(transfer: inputDataDto) {
    this.transfer = transfer;
  }

  private getStrategy(): StrategyClass | undefined {
    const operationType = OPERATION_TYPE[this.transfer.type];
    const userType = operationType[this.transfer.user_type];

    const strategyMap = {
      [COMMISION_TYPE.cashInNatural]: CashInNaturalService,
      [COMMISION_TYPE.cashInJuridical]: CashInNaturalService,
      [COMMISION_TYPE.cashOutNatural]: CashOutNaturalService,
      [COMMISION_TYPE.cashOutJuridical]: CashOutJuridicalService,
    };

    return strategyMap[userType];
  }

  calculate(): commissionDto {
    if (this.transfer.operation.currency !== 'EUR') {
      return { error: 'Only supported currency is EUR' };
    }

    const StrategyClass = this.getStrategy();

    if (!StrategyClass) {
      return { error: 'Unsupported operation type or user type' };
    }

    const strategyInstance = new StrategyClass(this.transfer);
    return { commission: strategyInstance.getCommission() };
  }
}
