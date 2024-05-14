import { CashOutNaturalService } from '../../../src/services/commissions/cashOutNaturalService';
import { describe, expect, test, beforeEach } from '@jest/globals';
import { ModelState } from '../../../src/states/models/modelState';

describe('CashOutNaturalService', () => {
  const transfer = [
    {
      date: '2016-01-06',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 30000, currency: 'EUR' },
    },
    {
      date: '2016-01-07',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 1000.0, currency: 'EUR' },
    },
    {
      date: '2016-01-07',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 100.0, currency: 'EUR' },
    },
  ];

  beforeEach(() => {
    ModelState.set('cashOutNatural', {
      percents: 0.3,
      week_limit: {
        amount: 1000,
        currency: 'EUR',
      },
    });
  });

  describe('Testing getCommission() function.', () => {
    test('If cash out more week limit.', () => {
      const service = new CashOutNaturalService(transfer[0]);
      const commission = service.getCommission();
      expect(commission).toBe(87);
    });

    test('If we cash out week limit.', () => {
      const service = new CashOutNaturalService(transfer[1]);
      const commission = service.getCommission();
      expect(commission).toBe(3);
    });

    test('If week limit exceeded.', () => {
      const service = new CashOutNaturalService(transfer[2]);
      const commission = service.getCommission();
      expect(commission).toBe(0.3);
    });
  });
});
