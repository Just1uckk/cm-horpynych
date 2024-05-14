"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutputService = void 0;
class Output {
  outputInConsole(commissionData) {
    commissionData.forEach(commission => {
      commission.error ? console.log(commission.error) : console.log(commission.commission.toFixed(2));
    });
  }
}
const OutputService = exports.OutputService = new Output();