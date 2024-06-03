import { commissionDto } from "src/modules/calculateUserCommissionModule";

class _OutputService {
  outputInConsole(commissionData: commissionDto[]): void {
    commissionData.forEach((commission: commissionDto) => {
      commission.error
        ? console.log(commission.error)
        : console.log(commission?.commission?.toFixed(2));
    });
  }
}

export const OutputService = new _OutputService();
