import { BarChartProps } from "@/app/interfaces/Idata";
import { ChartOptions } from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import eod from "@/data/eod.json";
import { format } from "date-fns";

const BarChart = () => {
  const [chartData, setChartData] = useState<BarChartProps["data"] | null>(
    null
  );
  const [options, setOptions] = useState<ChartOptions<"bar">>({
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  });

  useEffect(() => {
    if (eod && eod.data) {
      const data = eod.data;

      // Ordena os dados pela data do menor para o maior
      data.sort(
        (a: any, b: any) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );

      // Map the necessary fields from the JSON data
      const labels = data.map(
        (item: any) => format(new Date(item.date), "dd/MM/yyyy") // Formata a data
      );
      const closeValues = data.map((item: any) => item.close); // Valor de fechamento
      const openValues = data.map((item: any) => item.open); // Valor de abertura

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Close Price",
            data: closeValues,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Open Price",
            data: openValues,
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
          },
        ],
      });
    }
  }, []);

  return <div>{chartData && <Bar data={chartData} options={options} />}</div>;
};

export default BarChart;
