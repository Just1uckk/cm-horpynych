"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPERATION_TYPE = exports.COMMISION_TYPE = void 0;
exports.COMMISION_TYPE = {
    cashInNatural: 'cashInNatural',
    cashInJuridical: 'cashInJuridical',
    cashOutNatural: 'cashOutNatural',
    cashOutJuridical: 'cashOutJuridical',
};
exports.OPERATION_TYPE = {
    cash_in: {
        natural: exports.COMMISION_TYPE.cashInNatural,
        juridical: exports.COMMISION_TYPE.cashInJuridical,
    },
    cash_out: {
        natural: exports.COMMISION_TYPE.cashOutNatural,
        juridical: exports.COMMISION_TYPE.cashOutJuridical,
    },
};
