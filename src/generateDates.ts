import { add } from "date-fns";

function generateDates(date: Date): string[] {
  return [
    // DAY 1
    add(date, { days: 0, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 0, hours: 12, minutes: 0 }).toISOString(),
    add(date, { days: 0, hours: 14, minutes: 0 }).toISOString(),
    add(date, { days: 0, hours: 16, minutes: 0 }).toISOString(),
    add(date, { days: 0, hours: 18, minutes: 0 }).toISOString(),
    add(date, { days: 0, hours: 20, minutes: 0 }).toISOString(),
    // DAY 2
    add(date, { days: 1, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 1, hours: 12, minutes: 0 }).toISOString(),
    add(date, { days: 1, hours: 14, minutes: 0 }).toISOString(),
    add(date, { days: 1, hours: 16, minutes: 0 }).toISOString(),
    add(date, { days: 1, hours: 18, minutes: 0 }).toISOString(),
    add(date, { days: 1, hours: 20, minutes: 0 }).toISOString(),
    // DAY 3
    add(date, { days: 2, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 2, hours: 12, minutes: 0 }).toISOString(),
    add(date, { days: 2, hours: 14, minutes: 0 }).toISOString(),
    add(date, { days: 2, hours: 16, minutes: 0 }).toISOString(),
    add(date, { days: 2, hours: 18, minutes: 0 }).toISOString(),
    add(date, { days: 2, hours: 20, minutes: 0 }).toISOString(),
    // DAY 4
    add(date, { days: 3, hours: 9, minutes: 30 }).toISOString(),
    add(date, { days: 3, hours: 12, minutes: 0 }).toISOString(),
    add(date, { days: 3, hours: 14, minutes: 30 }).toISOString(),
    add(date, { days: 3, hours: 17, minutes: 0 }).toISOString(),
    add(date, { days: 3, hours: 19, minutes: 30 }).toISOString(),
    // DAY 5
    add(date, { days: 4, hours: 9, minutes: 30 }).toISOString(),
    add(date, { days: 4, hours: 12, minutes: 0 }).toISOString(),
    add(date, { days: 4, hours: 14, minutes: 30 }).toISOString(),
    add(date, { days: 4, hours: 17, minutes: 0 }).toISOString(),
    add(date, { days: 4, hours: 19, minutes: 30 }).toISOString(),
    // DAY 6
    add(date, { days: 5, hours: 9, minutes: 30 }).toISOString(),
    add(date, { days: 5, hours: 12, minutes: 0 }).toISOString(),
    add(date, { days: 5, hours: 14, minutes: 30 }).toISOString(),
    add(date, { days: 5, hours: 17, minutes: 0 }).toISOString(),
    add(date, { days: 5, hours: 19, minutes: 30 }).toISOString(),
    // DAY 7
    add(date, { days: 6, hours: 9, minutes: 30 }).toISOString(),
    add(date, { days: 6, hours: 12, minutes: 0 }).toISOString(),
    add(date, { days: 6, hours: 14, minutes: 30 }).toISOString(),
    add(date, { days: 6, hours: 17, minutes: 0 }).toISOString(),
    add(date, { days: 6, hours: 19, minutes: 30 }).toISOString(),
    // DAY 8
    add(date, { days: 7, hours: 9, minutes: 30 }).toISOString(),
    add(date, { days: 7, hours: 12, minutes: 0 }).toISOString(),
    add(date, { days: 7, hours: 14, minutes: 30 }).toISOString(),
    add(date, { days: 7, hours: 17, minutes: 0 }).toISOString(),
    add(date, { days: 7, hours: 19, minutes: 30 }).toISOString(),
    // DAY 9
    add(date, { days: 8, hours: 9, minutes: 30 }).toISOString(),
    add(date, { days: 8, hours: 12, minutes: 0 }).toISOString(),
    add(date, { days: 8, hours: 14, minutes: 30 }).toISOString(),
    add(date, { days: 8, hours: 17, minutes: 0 }).toISOString(),
    add(date, { days: 8, hours: 19, minutes: 30 }).toISOString(),
    // DAY 10
    add(date, { days: 9, hours: 9, minutes: 30 }).toISOString(),
    add(date, { days: 9, hours: 12, minutes: 0 }).toISOString(),
    add(date, { days: 9, hours: 14, minutes: 30 }).toISOString(),
    add(date, { days: 9, hours: 17, minutes: 0 }).toISOString(),
    add(date, { days: 9, hours: 19, minutes: 30 }).toISOString(),
    // DAY 11
    add(date, { days: 10, hours: 9, minutes: 30 }).toISOString(),
    add(date, { days: 10, hours: 12, minutes: 0 }).toISOString(),
    add(date, { days: 10, hours: 14, minutes: 30 }).toISOString(),
    add(date, { days: 10, hours: 17, minutes: 0 }).toISOString(),
    add(date, { days: 10, hours: 19, minutes: 30 }).toISOString(),
    // DAY 12
    add(date, { days: 11, hours: 9, minutes: 30 }).toISOString(),
    add(date, { days: 11, hours: 12, minutes: 0 }).toISOString(),
    add(date, { days: 11, hours: 14, minutes: 30 }).toISOString(),
    add(date, { days: 11, hours: 17, minutes: 0 }).toISOString(),
    add(date, { days: 11, hours: 19, minutes: 30 }).toISOString(),
    // DAY 13
    add(date, { days: 12, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 12, hours: 13, minutes: 0 }).toISOString(),
    add(date, { days: 12, hours: 16, minutes: 0 }).toISOString(),
    add(date, { days: 12, hours: 19, minutes: 0 }).toISOString(),
    // DAY 14
    add(date, { days: 13, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 13, hours: 13, minutes: 0 }).toISOString(),
    add(date, { days: 13, hours: 16, minutes: 0 }).toISOString(),
    add(date, { days: 13, hours: 19, minutes: 0 }).toISOString(),
    // DAY 15
    add(date, { days: 14, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 14, hours: 13, minutes: 0 }).toISOString(),
    add(date, { days: 14, hours: 16, minutes: 0 }).toISOString(),
    add(date, { days: 14, hours: 19, minutes: 0 }).toISOString(),
    // DAY 16
    add(date, { days: 15, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 15, hours: 13, minutes: 0 }).toISOString(),
    add(date, { days: 15, hours: 16, minutes: 0 }).toISOString(),
    add(date, { days: 15, hours: 19, minutes: 0 }).toISOString(),
    // DAY 17
    add(date, { days: 16, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 16, hours: 15, minutes: 0 }).toISOString(),
    add(date, { days: 16, hours: 20, minutes: 0 }).toISOString(),
    // DAY 18
    add(date, { days: 17, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 17, hours: 15, minutes: 0 }).toISOString(),
    add(date, { days: 17, hours: 20, minutes: 0 }).toISOString(),
    // DAY 19
    add(date, { days: 18, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 18, hours: 15, minutes: 0 }).toISOString(),
    add(date, { days: 18, hours: 20, minutes: 0 }).toISOString(),
    // DAY 20
    add(date, { days: 19, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 19, hours: 20, minutes: 0 }).toISOString(),
    // DAY 21
    add(date, { days: 20, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 20, hours: 20, minutes: 0 }).toISOString(),
    // DAY 22
    add(date, { days: 21, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 21, hours: 20, minutes: 0 }).toISOString(),
    // DAY 23
    add(date, { days: 22, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 22, hours: 20, minutes: 0 }).toISOString(),
    // DAY 24
    add(date, { days: 23, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 23, hours: 20, minutes: 0 }).toISOString(),
    // DAY 25
    add(date, { days: 24, hours: 10, minutes: 0 }).toISOString(),
    add(date, { days: 24, hours: 20, minutes: 0 }).toISOString(),
  ];
}

export default generateDates;
