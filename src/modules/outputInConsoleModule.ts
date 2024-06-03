import { OutputService } from '../services/outputService';
import { commissionDto } from './calculateUserCommissionModule';

export async function outputInConsoleModule(commission: commissionDto[]) {
  OutputService.outputInConsole(commission);
}
