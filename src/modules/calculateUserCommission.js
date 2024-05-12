import { CommissionManager } from '../services/commissions/commissionManager';
import { outputService } from '../services/outputService';

export function calculateUserCommission(data) {
  if (data) {
    const commissionList = data.map((transferInformation) =>
      new CommissionManager(transferInformation).calculate(),
    );
    outputService.outputInConsole(commissionList);
  }
}
