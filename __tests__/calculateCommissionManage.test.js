import { describe, expect, test, jest, beforeEach } from '@jest/globals';
import { ModelState } from '../src/states/models/modelState';
import { CommissionManager } from '../src/services/commissions/commissionManager';

const users = {
  get: jest.fn().mockReturnValue([
    {
      date: '2016-01-05',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_in',
      operation: { amount: 200.0, currency: 'EUR' },
    },
    {
      date: '2016-01-06',
      user_id: 2,
      user_type: 'juridical',
      type: 'cash_out',
      operation: { amount: 300.0, currency: 'EUR' },
    },
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
    {
      date: '2016-01-10',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 100.0, currency: 'EUR' },
    },
    {
      date: '2016-01-10',
      user_id: 2,
      user_type: 'juridical',
      type: 'cash_in',
      operation: { amount: 1000000.0, currency: 'EUR' },
    },
    {
      date: '2016-01-10',
      user_id: 3,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 1000.0, currency: 'EUR' },
    },
    {
      date: '2016-02-15',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 300.0, currency: 'EUR' },
    },
    {
      date: '2016-02-15',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 300.0, currency: 'USD' },
    },
  ]),
};
beforeEach(() => {
  ModelState.set('cashInNatural', {
    percents: 0.03,
    max: {
      amount: 5,
      currency: 'EUR',
    },
  });
  ModelState.set('cashOutNatural', {
    percents: 0.3,
    week_limit: {
      amount: 1000,
      currency: 'EUR',
    },
  });
  ModelState.set('cashOutJuridical', {
    percents: 0.3,
    min: {
      amount: 0.5,
      currency: 'EUR',
    },
  });
});
describe('Final functional test.', () => {
  test('Test.', () => {
    const userList = users.get();
    const commissionList = userList.map((user) =>
      new CommissionManager(user).calculate(),
    );
    expect(commissionList).toEqual([
      { commission: 0.06 },
      { commission: 0.9 },
      { commission: 87 },
      { commission: 3 },
      { commission: 0.3 },
      { commission: 0.3 },
      { commission: 5 },
      { commission: 0 },
      { commission: 0 },
      { error: 'Only supported currency is EUR' },
    ]);
  });
});
