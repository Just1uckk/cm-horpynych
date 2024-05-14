import { CashInNaturalService } from '../../../src/services/commissions/cashInNaturalService';
import { jest, describe, expect, test } from '@jest/globals';

const userDataMax = {
  date: '2016-01-05',
  user_id: 1,
  user_type: 'natural',
  type: 'cash_in',
  operation: {
    amount: 20000,
    currency: 'EUR',
  },
};
const userDataMin = {
  date: '2016-01-05',
  user_id: 1,
  user_type: 'natural',
  type: 'cash_in',
  operation: {
    amount: 200,
    currency: 'EUR',
  },
};
const configState = {
  get: jest.fn().mockReturnValue({
    percents: 0.03,
    max: {
      amount: 5,
    },
  }),
};

describe('CashInNaturalService', () => {
  describe('constructor', () => {
    test('Sets the userData property to the passed-in user data object.', () => {
      const service = new CashInNaturalService(userDataMin);
      expect(service.transfer).toEqual(userDataMin);
    });

    test('Throws an error when a user data object is not passed in.', () => {
      expect(() => {
        new CashInNaturalService().getCommission(userDataMin);
      }).toThrow();
    });
  });

  describe('getCommission', () => {
    test('Returns the calculated commission when it is less than the max amount.', () => {
      const service = new CashInNaturalService(userDataMax);
      service.config = configState.get('cashInNatural');
      const commission = service.getCommission();
      expect(commission).toBe(5);
    });

    test('Returns the max commission amount when the calculated commission is greater than the max amount.', () => {
      const service = new CashInNaturalService(userDataMin);
      service.config = configState.get('cashInNatural');
      const commission = service.getCommission();
      expect(commission).toBe(0.06);
    });
  });
});
