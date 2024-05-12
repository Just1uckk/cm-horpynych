import { getISOWeek } from 'date-fns';

class DateValidation {
  getIsThisWeek(previousDate, currentDate) {
    const previous = new Date(previousDate);
    const current = new Date(currentDate);
    return getISOWeek(previous) === getISOWeek(current);
  }
}

export const DateService = new DateValidation();
