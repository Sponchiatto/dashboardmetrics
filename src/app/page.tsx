"use client"
import BarChart from "@/components/BarChart";
import { Bar } from "react-chartjs-2";

export default function Home() {
  return (
    <div>
      <h1>Bar Chart</h1>
      <BarChart />
      <Bar
        data={{
          labels: ["Jan", "Feb", "Mar"],
          datasets: [
            {
              label: "Series A",
              data: [10, 20, 30],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
            {
              label: "Series B",
              data: [103, 20, 35],
              backgroundColor: "rgba(133, 99, 255, 0.178)",
              borderColor: "#ffffff",
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}
