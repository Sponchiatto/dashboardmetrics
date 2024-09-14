"use client";

import MultiLineChart from "@/components/LineChart/LineChart";
import eodAmazon from "@/data/eod/eodAmazon.json";
import eodMicrosoft from "@/data/eod/eodMicrosoft.json";
import eodApple from "@/data/eod/eodApple.json";
import eodGoogle from "@/data/eod/eodGoogle.json";
import MultiBarChart from "@/components/BarChart/BarChart";
import TitleH1 from "@/components/Title/title";
import KpiCard from "@/components/KpiCard/KpiCard";
import { PieChart } from "recharts";
import Companies from "@/components/Companies/Companies";

export default function DashBoard() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-8">
        <TitleH1
          title="Painel de Análise de Ações para Empresas de Tecnologia"
          className="text-4xl font-bold text-gray-800 mb-6 text-center"
        />
        <Companies/>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <MultiLineChart
            datasets={[
              { name: "Apple", data: eodApple.data },
              { name: "MicroSoft", data: eodMicrosoft.data },
              { name: "Amazon", data: eodAmazon.data },
              { name: "Google", data: eodGoogle.data },
            ]}
            dataKey="close"
            chartTitle="Preço de fechamento de algumas empresas de tecnologia"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <MultiBarChart
            datasets={[
              { name: "Apple", data: eodApple.data },
              { name: "MicroSoft", data: eodMicrosoft.data },
              { name: "Amazon", data: eodAmazon.data },
              { name: "Google", data: eodGoogle.data },
            ]}
            dataKey="volume"
            chartTitle="Volume de ações de algumas empresas de tecnologia"
          />
        </div>
        
      </div>
    </div>
  );
}
