import { CommissionManager } from '../services/commissions/commissionManager';
import { OutputService } from '../services/outputService';
import { jsonParseUtil } from '../utils/jsonParseUtil';

export async function calculateUserCommissionModule() {
  const inputData = await jsonParseUtil(process.argv[2]);
  if (inputData) {
    const commissionList = inputData.map((transferInformation) =>
      new CommissionManager(transferInformation).calculate(),
    );
    OutputService.outputInConsole(commissionList);
  }
}
