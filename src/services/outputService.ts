class _OutputService {
  outputInConsole(commissionData) {
    commissionData.forEach((commission) => {
      commission.error
        ? console.log(commission.error)
        : console.log(commission.commission.toFixed(2));
    });
  }
}

export const OutputService = new _OutputService();
