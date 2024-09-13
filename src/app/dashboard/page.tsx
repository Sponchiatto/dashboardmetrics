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

export default function DashBoard() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-8">
        <TitleH1
          title="Painel de Análise de Ações para Empresas de Tecnologia"
          className="text-4xl font-bold text-gray-800 mb-6 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <KpiCard title="Valor de Mercado" value="$2.45T" subtitle="Apple" />
          <KpiCard title="Variação Diária" value="+2.45%" subtitle="Google" />
          <KpiCard
            title="Volume Médio Diário"
            value="10.5M"
            subtitle="Microsoft"
          />
          <KpiCard title="P/E Ratio" value="35.12" subtitle="Amazon" />
        </div>
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
