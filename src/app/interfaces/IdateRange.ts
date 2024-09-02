export type DateRange =
  | "day"
  | "week"
  | "month"
  | "3months"
  | "6months"
  | "year";

export interface DateRangeFilterProps {
  onChange: (range: DateRange) => void;
}
