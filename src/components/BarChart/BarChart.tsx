import {
  BarChart as RechartsBarChart,
  Bar,
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
  name: string; // Nome do dataset, usado para identificar as barras
  data: IDataPoint[]; // Dados associados ao dataset
}

// Interface das propriedades (props) do componente MultiBarChart
interface MultiBarChartProps {
  datasets: Dataset[]; // Lista de datasets a serem exibidos
  chartTitle?: string; // Título opcional do gráfico
  dataKey: string; // Chave que representa o tipo de dado a ser exibido (ex: 'volume')
}

// Componente MultiBarChart que renderiza um gráfico de barras
const MultiBarChart = ({
  datasets,
  chartTitle = "Volume de Ações", // Título padrão se não for fornecido
}: MultiBarChartProps) => {
  // Estado para armazenar os dados formatados para o gráfico
  const [chartData, setChartData] = useState<IDataPoint[]>([]);
  const [lastDates, setLastDates] = useState<{ [key: string]: string }>({});

  // useEffect para processar e formatar os dados dos datasets
  useEffect(() => {
    if (datasets && datasets.length > 0) {
      const mergedData: IDataPoint[] = []; // Array para armazenar os dados consolidados

      datasets.forEach((dataset) => {
        dataset.data.forEach((item) => {
          const formattedDate = format(new Date(item.date), "yyyy-MM-dd");

          // Verifica se o ponto de dados já existe
          const existingDataPoint = mergedData.find(
            (d) => d.date === formattedDate
          );

          if (existingDataPoint) {
            // Se o ponto de dados já existir, atualiza o valor correspondente
            existingDataPoint[`${dataset.name}`] = item.volume; // Usamos o volume diretamente
          } else {
            // Caso contrário, adiciona um novo ponto de dados ao array
            mergedData.push({
              date: formattedDate,
              [dataset.name]: item.volume,
            });
          }
        });
      });

      setChartData(mergedData); // Atualiza o estado com os dados consolidados
    }
  }, [datasets]); // Dependências: quando datasets mudam, o efeito é executado

  // Lista de cores para as barras
  const colors = ["#82ca9d", "#8884d8", "#ffc658", "#ff7300"];

  return (
    <div className="w-full h-96">
      <h2 className="text-center text-2xl font-bold mb-4">{chartTitle}</h2>{" "}
      {/* Título do gráfico */}
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={chartData} // Dados para o gráfico
          margin={{ top: 40, right: 50, left: 20, bottom: 5 }} // Margens do gráfico
        >
          <CartesianGrid strokeDasharray="3 3" /> {/* Grid do gráfico */}
          <XAxis dataKey="date" /> {/* Eixo X usando a chave 'date' */}
          <YAxis /> {/* Eixo Y */}
          <Tooltip /> {/* Tooltip para exibir informações ao passar o mouse */}
          <Legend /> {/* Legenda para identificar as barras */}
          {datasets.map((dataset, index) => (
            <Bar
              key={dataset.name} // Chave única para cada conjunto de dados
              dataKey={dataset.name} // Usa o nome do dataset para diferenciar as barras
              fill={colors[index % colors.length]} // Seleciona a cor com base no índice
              stackId="a" // Para empilhar as barras
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MultiBarChart;
