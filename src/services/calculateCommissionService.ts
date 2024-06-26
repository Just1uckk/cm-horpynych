class _CalculateCommissionService {
  getCommission(cash: number, commissionPercentage: number) {
    const commissionFee = (cash / 100) * commissionPercentage;
    const centsPerEuro = 100;
    return Math.ceil(commissionFee * centsPerEuro) / centsPerEuro;
  }
}

export const CalculateCommissionService = new _CalculateCommissionService();
