import { describe, expect, test } from '@jest/globals';
import { DateService } from '../../src/services/dateService';

describe('Week Validation service.', () => {
  test('Returns true if two dates are in the same week.', () => {
    const previousDate = '2022-03-21';
    const currentDate = '2022-03-27';
    expect(DateService.getIsThisWeek(previousDate, currentDate)).toBe(true);
  });

  test('Returns false if two dates are in different weeks.', () => {
    const previousDate = '2022-03-20';
    const currentDate = '2022-03-27';
    expect(DateService.getIsThisWeek(previousDate, currentDate)).toBe(false);
  });

  test('Returns false if the previous date is after the current date.', () => {
    const previousDate = '2022-03-27';
    const currentDate = '2022-03-20';
    expect(DateService.getIsThisWeek(previousDate, currentDate)).toBe(false);
  });

  test('Returns false if one of the dates is invalid.', () => {
    const previousDate = '2022-03-20';
    const currentDate = 'invalid-date';
    expect(DateService.getIsThisWeek(previousDate, currentDate)).toBe(false);
  });
});
