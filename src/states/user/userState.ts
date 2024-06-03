export interface userDataDto {
  transaction: Date[];
  freeCharge: number;
}

class User {
  private users: Record<number, userDataDto>;

  constructor() {
    this.users = {};
  }

  getUser(id: number): userDataDto | undefined {
    return this.users[id];
  }

  addUser(id: number, date: Date, money: number): void {
    const user = this.getUser(id);
    this.users[id] = {
      transaction: [],
      freeCharge: money
    };
    this.users[id].transaction =
      user && user.transaction ? [...user.transaction, date] : [date];
  }
}

export const UserState = new User();
