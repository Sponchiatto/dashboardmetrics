import { DateRange } from "@/app/interfaces/IdateRange";
import {
  startOfDay,
  startOfWeek,
  startOfMonth,
  startOfQuarter,
  startOfYear,
  subDays,
  subWeeks,
  subMonths,
  subQuarters,
  subYears,
} from "date-fns";

const getDateRange = (range: DateRange) => {
  const now = new Date();

  switch (range) {
    case "day":
      return {
        start: startOfDay(now),
        end: now,
      };
    case "week":
      return {
        start: startOfWeek(now),
        end: now,
      };
    case "month":
      return {
        start: startOfMonth(now),
        end: now,
      };
    case "3months":
      return {
        start: subMonths(startOfMonth(now), 3),
        end: now,
      };
    case "6months":
      return {
        start: subMonths(startOfMonth(now), 6),
        end: now,
      };
    case "year":
      return {
        start: startOfYear(now),
        end: now,
      };
    default:
      throw new Error("Unknown date range");
  }
};

export default getDateRange;
