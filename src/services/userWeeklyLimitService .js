import { DateService } from './dateService';

export class UserWeeklyLimitService  {
  constructor(user, currentDate, weekLimit) {
    this.user = user;
    this.weekLimit = weekLimit;
    this.currentDate = currentDate;
  }

  getCurrentLimit(currentDate) {
    if (!currentDate) return false;
    return DateService.getIsThisWeek(
      this.user?.transaction[this.user?.transaction.length - 1],
      currentDate,
    );
  }

  currentLimit() {
    if (!this.user) return this.weekLimit;
    if (this.getCurrentLimit(this.currentDate)) {
      return this.user.freeCharge;
    } else {
      return this.weekLimit;
    }
  }
}
