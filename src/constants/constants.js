export const COMMISION_TYPE = {
  cashInNatural: 'cashInNatural',
  cashInJuridical: 'cashInJuridical',
  cashOutNatural: 'cashOutNatural',
  cashOutJuridical: 'cashOutJuridical',
};

export const OPERATION_TYPE = {
  cash_in: {
    natural: COMMISION_TYPE.cashInNatural,
    juridical: COMMISION_TYPE.cashInJuridical,
  },
  cash_out: {
    natural: COMMISION_TYPE.cashOutNatural,
    juridical: COMMISION_TYPE.cashOutJuridical,
  },
};
