import { CommissionManager } from '../services/commissions/commissionManager';
import { inputDataDto, parseJsonFile } from '../utils/parseJsonFile';


export interface commissionDto {
  commission?: number;
  error?: string;
}

export async function calculateUserCommissionModule() {
  const path: string = process.argv[2];
  const inputData: inputDataDto[] = await parseJsonFile(path);
  const commissionList: commissionDto[] = inputData.map((transferInformation) =>
    new CommissionManager(transferInformation).calculate(),
  );
  return commissionList
}
