import { describe, expect, test, afterEach } from '@jest/globals';
import { UserState } from '../../src/states/user/userState';

describe('UserState.', () => {
  afterEach(() => {
    UserState.users = {};
  });
  describe('GetUser.', () => {
    test('Should return undefined if user with id does not exist.', () => {
      // @ts-ignore
      expect(UserState.getUser('nonexistent')).toBeUndefined();
    });

    test('Should return the user with the given id.', () => {
      const id = 1;
      UserState.addUser(id, new Date('2022-01-01'), 100);
      expect(UserState.getUser(id)).toEqual({
        transaction: expect.any(Array),
        freeCharge: 100,
      });
    });
  });

  describe('AddUser', () => {
    test('Should add a new user with the given id, date, and money.', () => {
      const id = 1;
      const date = new Date('2022-01-01');
      const money = 100;
      UserState.addUser(id, date, money);
      expect(UserState.getUser(id)).toEqual({
        transaction: [date],
        freeCharge: money,
      });
    });

    test('Should add the transaction to the user if the user already exists.', () => {
      const id = 2;
      const date1 = new Date('2022-01-01');
      const date2 = new Date('2022-01-02');
      const money = 100;
      UserState.addUser(id, date1, money);
      UserState.addUser(id, date2, money);
      expect(UserState.getUser(id)).toEqual({
        transaction: [date1, date2],
        freeCharge: money,
      });
    });
  });
});
