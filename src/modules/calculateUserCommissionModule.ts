import { CommissionManager } from '../services/commissions/commissionManager';
import { OutputService } from '../services/outputService';
import { parseJsonFile } from '../utils/parseJsonFile';

export async function calculateUserCommissionModule() {
  const path = process.argv[2];
  const inputData = await parseJsonFile(path);
  const commissionList = inputData.map((transferInformation) =>
    new CommissionManager(transferInformation).calculate(),
  );
  return commissionList
}
