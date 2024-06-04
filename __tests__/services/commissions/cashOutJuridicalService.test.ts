import { CashOutJuridicalService } from '../../../src/services/commissions/cashOutJuridicalService';
import { jest, describe, expect, test } from '@jest/globals';
import { inputDataDto } from '../../../src/utils/parseJsonFile';
import { getCashOutJuridicalDto } from '../../../src/api/api';

const configState = {
  get: jest.fn().mockReturnValue({
    percents: 0.3,
    min: {
      amount: 0.5,
      currency: 'EUR',
    },
  }),
};

describe('CashOutJuridicalService', () => {
  const userDataMin: inputDataDto = {
    date: new Date('2016-01-06'),
    user_id: 2,
    user_type: 'juridical',
    type: 'cash_out',
    operation: {
      amount: 300.0,
      currency: 'EUR',
    },
  };
  const userDataMax: inputDataDto = {
    date: new Date('2016-01-06'),
    user_id: 2,
    user_type: 'juridical',
    type: 'cash_out',
    operation: {
      amount: 0.3,
      currency: 'EUR',
    },
  };

  describe('getCommission()', () => {
    test('Returns the commission when it is greater than the minimum amount.', () => {
      const service = new CashOutJuridicalService(userDataMin);
      service.config = configState.get('cashOutJuridical') as getCashOutJuridicalDto;
      const commission = service.getCommission();
      expect(commission).toBe(0.9);
    });

    test('Returns the minimum amount when the commission is less than the minimum amount.', () => {
      const service = new CashOutJuridicalService(userDataMax);
      service.config = configState.get('cashOutJuridical') as getCashOutJuridicalDto;
      const commission = service.getCommission();
      expect(commission).toBe(0.5);
    });
  });
});
