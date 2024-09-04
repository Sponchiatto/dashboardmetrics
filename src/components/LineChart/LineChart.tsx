import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import eod from "@/data/eod.json";
import { format } from "date-fns";

interface DataPoint {
  date: string;
  close: number;
  open: number;
}

const LineChart = () => {
  const [chartData, setChartData] = useState<DataPoint[]>([]);

  useEffect(() => {
    if (eod && eod.data) {
      const data = eod.data;

      // Ordena os dados pela data do menor para o maior
      data.sort(
        (a: any, b: any) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );

      // Map the necessary fields from the JSON data
      const formattedData = data.map((item: any) => ({
        date: format(new Date(item.date), "dd/MM/yyyy"), // Formata a data
        close: item.close, // Valor de fechamento
        open: item.open, // Valor de abertura
      }));

      setChartData(formattedData);
    }
  }, []);

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={chartData}
          margin={{ top: 40, right: 50, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="close"
            stroke="#82ca9d"
            dot={false}
            activeDot={{ r: 8 }}
          />
          <text
            x={600}
            y={20}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#333"
            fontSize={20}
            fontWeight={700}
          >
            Preço de Fechamento
          </text>
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
