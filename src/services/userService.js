import { DateService } from './dateService';

export class UserService {
  constructor(user, currentDate, weekLimit) {
    this.user = user;
    this.weekLimit = weekLimit;
    this.currentDate = currentDate;
  }

  getIsInOneWeek(currentDate) {
    if (!currentDate) return false;
    return DateService.getIsThisWeek(
      this.user?.transaction[this.user?.transaction.length - 1],
      currentDate,
    );
  }

  currentLimit() {
    if (!this.user) return this.weekLimit;
    if (this.getIsInOneWeek(this.currentDate)) {
      return this.user.freeCharge;
    } else {
      return this.weekLimit;
    }
  }
}
