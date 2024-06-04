import { UserWeeklyLimitService  } from '../../src/services/userWeeklyLimitService ';
import { describe, expect, test } from '@jest/globals';
import { userDataDto } from '../../src/states/user/userState';

describe('UserService.', () => {
  const user: userDataDto = {
    transaction: [new Date('2022-03-20'), new Date('2022-03-23'), new Date('2022-03-25')],
    freeCharge: 100,
  };
  const weekLimit: number = 200;
  const currentDate: Date = new Date('2022-03-27');

  describe('GetIsInOneWeek.', () => {
    test('Should return true if the previous transaction date is in the same week as the current date.', () => {
      const userServiceInstance = new UserWeeklyLimitService(user, currentDate, weekLimit);
      const previousDate = new Date('2022-03-25');

      const result = userServiceInstance.getCurrentLimit(previousDate);

      expect(result).toBe(true);
    });

    test('Should return false if the previous transaction date is not in the same week as the current date.', () => {
      const userServiceInstance = new UserWeeklyLimitService(user, currentDate, weekLimit);
      const previousDate = new Date('2022-03-20');

      const result = userServiceInstance.getCurrentLimit(previousDate);

      expect(result).toBe(false);
    });

    test('Should return false if the user does not have any transactions.', () => {
      const userServiceInstance = new UserWeeklyLimitService({}, currentDate, weekLimit);
      const result = userServiceInstance.getCurrentLimit(undefined);

      expect(result).toBe(false);
    });
  });

  describe('CurrentLimit.', () => {
    test('Should return the week limit if the user is not defined.', () => {
      const userServiceInstance = new UserWeeklyLimitService(
        undefined,
        currentDate,
        weekLimit,
      );

      const result = userServiceInstance.currentLimit();

      expect(result).toBe(weekLimit);
    });

    test('Should return the free charge limit if the previous transaction is in the same week as the current date.', () => {
      const userServiceInstance = new UserWeeklyLimitService(user, currentDate, weekLimit);

      const result = userServiceInstance.currentLimit();

      expect(result).toBe(user.freeCharge);
    });

    test('Should return the week limit if the previous transaction is not in the same week as the current date.', () => {
      const userServiceInstance = new UserWeeklyLimitService(
        user,
        new Date('2022-04-01'),
        weekLimit,
      );

      const result = userServiceInstance.currentLimit();

      expect(result).toBe(weekLimit);
    });
  });
});
