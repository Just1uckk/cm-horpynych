"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SITUATION_MODEL = exports.SITUATION_METHODS = void 0;
const SITUATION_MODEL = exports.SITUATION_MODEL = {
  cashInNatural: 'cashInNatural',
  cashInJuridical: 'cashInJuridical',
  cashOutNatural: 'cashOutNatural',
  cashOutJuridical: 'cashOutJuridical'
};
const SITUATION_METHODS = exports.SITUATION_METHODS = {
  cash_in: {
    natural: SITUATION_MODEL.cashInNatural,
    juridical: SITUATION_MODEL.cashInJuridical
  },
  cash_out: {
    natural: SITUATION_MODEL.cashOutNatural,
    juridical: SITUATION_MODEL.cashOutJuridical
  }
};