import { getISOWeek } from 'date-fns';

class _DateService {
  getIsThisWeek(previousDate: Date, currentDate: Date): boolean {
    const previous = new Date(previousDate);
    const current = new Date(currentDate);
    return getISOWeek(previous) === getISOWeek(current);
  }
}

export const DateService = new _DateService();
