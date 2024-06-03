import { userDataDto } from '../states/user/userState';
import { DateService } from './dateService';

export class UserWeeklyLimitService  {
  private user: userDataDto | undefined;
  private weekLimit: number;
  private currentDate: Date;

  constructor(user: userDataDto | undefined, currentDate: Date, weekLimit: number) {
    this.user = user;
    this.weekLimit = weekLimit;
    this.currentDate = currentDate;
  }

  getCurrentLimit(currentDate: Date): boolean {
    if (!currentDate) return false;
    if (!this.user) return false;
    return DateService.getIsThisWeek(
      this.user?.transaction[this.user?.transaction.length - 1],
      currentDate,
    );
  }

  currentLimit(): number {
    if (!this.user) return this.weekLimit;
    if (this.getCurrentLimit(this.currentDate)) {
      return this.user.freeCharge;
    } else {
      return this.weekLimit;
    }
  }
}
