"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OPERATION_TYPE = exports.COMMISION_TYPE = void 0;
const COMMISION_TYPE = exports.COMMISION_TYPE = {
  cashInNatural: 'cashInNatural',
  cashInJuridical: 'cashInJuridical',
  cashOutNatural: 'cashOutNatural',
  cashOutJuridical: 'cashOutJuridical'
};
const OPERATION_TYPE = exports.OPERATION_TYPE = {
  cash_in: {
    natural: COMMISION_TYPE.cashInNatural,
    juridical: COMMISION_TYPE.cashInJuridical
  },
  cash_out: {
    natural: COMMISION_TYPE.cashOutNatural,
    juridical: COMMISION_TYPE.cashOutJuridical
  }
};