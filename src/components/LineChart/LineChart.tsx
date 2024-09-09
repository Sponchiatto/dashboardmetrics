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
import { format } from "date-fns";
import { IDataPoint } from "@/interfaces/IDataPoint";


// Interface para os datasets usados no gráfico
interface Dataset {
  name: string; // Nome do dataset, usado para identificar a linha
  data: IDataPoint[]; // Dados associados ao dataset
}

// Interface das propriedades (props) do componente MultiLineChart
interface MultiLineChartProps {
  datasets: Dataset[]; // Lista de datasets a serem exibidos
  dataKey: string; // Chave que representa o tipo de dado a ser exibido (ex: 'close')
  chartTitle?: string; // Título opcional do gráfico
}

// Componente MultiLineChart que renderiza um gráfico de linhas
const MultiLineChart = ({
  datasets,
  dataKey,
  chartTitle = "Multi-Line Chart", // Título padrão se não for fornecido
}: MultiLineChartProps) => {
  // Estado para armazenar os dados formatados para o gráfico
  const [chartData, setChartData] = useState<IDataPoint[]>([]);

  // useEffect para processar e formatar os dados dos datasets
  useEffect(() => {
    if (datasets && datasets.length > 0) {
      const mergedData: IDataPoint[] = []; // Array para armazenar os dados consolidados

      datasets.forEach((dataset) => {
        dataset.data.forEach((item) => {
          const existingDataPoint = mergedData.find(
            (d) => d.date === format(new Date(item.date), "yyyy-MM-dd")
          );

          if (existingDataPoint) {
            // Se o ponto de dados já existir, atualiza o valor correspondente
            existingDataPoint[`${dataKey}_${dataset.name}`] = item[dataKey];
          } else {
            // Caso contrário, adiciona um novo ponto de dados ao array
            mergedData.push({
              date: format(new Date(item.date), "yyyy-MM-dd"),
              [`${dataKey}_${dataset.name}`]: item[dataKey],
            });
          }
        });
      });

      setChartData(mergedData); // Atualiza o estado com os dados consolidados
    }
  }, [datasets, dataKey]); // Dependências: quando datasets ou dataKey mudam, o efeito é executado

  // Lista de cores para as linhas do gráfico
  const colors = ["#82ca9d", "#8884d8", "#ffc658", "#ff7300"];

  return (
    <div className="w-full h-96">
      <h2 className="text-center text-2xl font-bold mb-4">{chartTitle}</h2>{" "}
      {/* Título do gráfico */}
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={chartData} // Dados para o gráfico
          margin={{ top: 40, right: 50, left: 20, bottom: 5 }} // Margens do gráfico
        >
          <CartesianGrid strokeDasharray="3 3" /> {/* Grid do gráfico */}
          <XAxis dataKey="date" /> {/* Eixo X usando a chave 'date' */}
          <YAxis /> {/* Eixo Y */}
          <Tooltip /> {/* Tooltip para exibir informações ao passar o mouse */}
          <Legend /> {/* Legenda para identificar as linhas */}
          {datasets.map((dataset, index) => (
            <Line
              key={dataset.name} // Chave única para cada linha
              type="monotone" // Tipo de linha
              dataKey={`${dataKey}_${dataset.name}`} // Chave de dados para a linha
              stroke={colors[index % colors.length]} // Cor da linha baseada no índice
              dot={false} // Não exibe pontos individuais
              activeDot={{ r: 8 }} // Configura o ponto ativo quando a linha é selecionada
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MultiLineChart;
