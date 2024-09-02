import { ChartOptions } from "chart.js";

// Definição da interface Dataset
interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

// Definição da interface BarChartProps
export interface BarChartProps {
  data: {
    labels: string[];
    datasets: Dataset[];
  };
  options?: ChartOptions<"bar">;
}
