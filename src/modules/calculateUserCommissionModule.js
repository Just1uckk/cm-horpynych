import { CommissionManager } from '../services/commissions/commissionManager';
import { OutputService } from '../services/outputService';
import { parseJsonFile } from '../utils/parseJsonFile';

export async function calculateUserCommissionModule() {
  const inputData = await parseJsonFile(process.argv[2]);
  if (inputData) {
    const commissionList = inputData.map((transferInformation) =>
      new CommissionManager(transferInformation).calculate(),
    );
    OutputService.outputInConsole(commissionList);
  }
}
