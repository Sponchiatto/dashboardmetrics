import React, { useState } from "react";
import { Ticker } from "@/interfaces/Company"; // Importando a interface Ticker
import { FaChevronRight, FaTimes } from "react-icons/fa"; // Importando ícones

interface TickerSelectorProps {
  tickers: Ticker[]; // Alterado para usar a interface Ticker
}

const TickerSelector: React.FC<TickerSelectorProps> = ({ tickers }) => {
  const [selectedTickers, setSelectedTickers] = useState<Ticker[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar o dropdown
  const [searchTerm, setSearchTerm] = useState(""); // Estado para o campo de busca

  // Função para alternar a seleção de um ticker
  const toggleTickerSelection = (ticker: Ticker) => {
    setSelectedTickers((prev) => {
      if (prev.includes(ticker)) {
        return prev.filter((t) => t !== ticker); // Remove o ticker se já estiver selecionado
      } else {
        return [...prev, ticker]; // Adiciona o ticker se não estiver selecionado
      }
    });
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev); // Alterna o estado de abertura do dropdown
  };

  // Função para lidar com a mudança no campo de busca
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Atualiza o estado do texto de busca
  };

  // Filtra os tickers com base no termo de busca
  const filteredTickers = tickers.filter((ticker) =>
    ticker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col space-y-4">
      {/* Dropdown para seleção de tickers */}
      <div className="relative">
        <button
          onClick={handleDropdownToggle}
          className="bg-blue-500 text-white py-2 px-4 rounded shadow flex items-center justify-between w-48"
        >
          Selecionar Tickers
          <FaChevronRight
            className={`ml-2 transition-transform ${
              dropdownOpen ? "rotate-90" : ""
            }`}
          />
        </button>
        {dropdownOpen && (
          <div className="absolute bg-white border border-gray-300 rounded-md shadow-md mt-1 w-48 max-h-60 overflow-y-auto z-10">
            {/* Campo de busca */}
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Buscar Tickers..."
              className="p-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {filteredTickers.map((ticker) => (
              <div
                key={ticker.symbol}
                className="flex items-center p-2 hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  checked={selectedTickers.includes(ticker)}
                  onChange={() => toggleTickerSelection(ticker)}
                  className="mr-2"
                />
                <label>
                  {ticker.name} ({ticker.symbol})
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quadro lateral para mostrar os tickers selecionados */}
      <div className="border border-gray-300 rounded-md p-4 w-full">
        <h3 className="font-semibold text-lg">Tickers Selecionados:</h3>
        <div className="flex flex-wrap space-x-2">
          {selectedTickers.map((ticker) => (
            <div
              key={ticker.symbol}
              className="flex items-center bg-gray-200 rounded-md p-2"
            >
              <span className="mr-2">
                {ticker.name} ({ticker.symbol})
              </span>
              <button
                onClick={() => toggleTickerSelection(ticker)}
                className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                aria-label="Remover"
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerSelector;
