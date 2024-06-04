import { userDataDto } from '../states/user/userState';
import { DateService } from './dateService';

export class UserWeeklyLimitService {
  private user: userDataDto | undefined | {};
  private weekLimit: number;
  private currentDate: Date;

  constructor(
    user: userDataDto | undefined | {},
    currentDate: Date,
    weekLimit: number,
  ) {
    this.user = user;
    this.weekLimit = weekLimit;
    this.currentDate = currentDate;
  }

  getCurrentLimit(currentDate: Date | undefined): boolean {
    if (!currentDate || !this.user || Object.keys(this.user).length === 0) return false;
    if ('transaction' in this.user) {
      return DateService.getIsThisWeek(
        this.user?.transaction[this.user?.transaction.length - 1],
        currentDate,
      );
    }
    return false;
  }

  currentLimit(): number {
    if (!this.user || Object.keys(this.user).length === 0) return this.weekLimit;
    if (this.getCurrentLimit(this.currentDate) && 'freeCharge' in this.user) {
      return this.user.freeCharge;
    }
    return this.weekLimit
  }
}
