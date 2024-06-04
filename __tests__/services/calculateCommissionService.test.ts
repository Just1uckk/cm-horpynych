import { describe, expect, test } from '@jest/globals';
import { CalculateCommissionService } from '../../src/services/calculateCommissionService';

describe('CalculateCommissionService method getCommission.', () => {
  test('Returns the correct commission for a given amount and interest rate.', () => {
    const { getCommission } = CalculateCommissionService;
    expect(getCommission(100, 5)).toBe(5);
    expect(getCommission(500, 2.5)).toBe(12.5);
    expect(getCommission(2000, 1.75)).toBe(35);
  });

  test('Rounds the commission to two decimal places.', () => {
    const { getCommission } = CalculateCommissionService;
    expect(getCommission(100, 3.333)).toBe(3.34);
    expect(getCommission(500, 1.2345)).toBe(6.18);
    expect(getCommission(2000, 0.98765)).toBe(19.76);
  });

  test('Returns 0 if the amount or interest rate are zero.', () => {
    const { getCommission } = CalculateCommissionService;
    expect(getCommission(0, 5)).toBe(0);
    expect(getCommission(100, 0)).toBe(0);
    expect(getCommission(0, 0)).toBe(0);
  });
  test('Rounding.', () => {
    const { getCommission } = CalculateCommissionService;
    expect(getCommission(0.01, 0.03)).toBe(0.01);
  });
});
