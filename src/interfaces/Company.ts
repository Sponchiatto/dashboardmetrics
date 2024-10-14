// interfaces/Timezone.ts
export interface Timezone {
  timezone: string | null; // Permitir null, se necessário
  abbr: string | null; // Permitir null, se necessário
  abbr_dst: string | null; // Permitir null, se necessário
}

// interfaces/Currency.ts
export interface Currency {
  code: string | null; // Permitir null, se necessário
  symbol: string | null; // Permitir null, se necessário
  name: string | null; // Permitir null, se necessário
}

// interfaces/StockExchange.ts
export interface StockExchange {
  name: string; // Nome da bolsa
  acronym: string; // Acrônimo da bolsa
  mic: string; // Código MIC (Market Identifier Code)
  country: string | null; // País (pode ser nulo)
  country_code: string; // Código do país
  city: string | null; // Cidade onde a bolsa está localizada
  website: string | null; // URL do site da bolsa
  timezone: Timezone; // Informações sobre o fuso horário
  currency: Currency; // Informações sobre a moeda
}

// interfaces/Ticker.ts
export interface Ticker {
  name: string; // Nome da empresa
  symbol: string; // Símbolo do ticker (ex: MSFT)
  has_intraday: boolean; // Indica se há dados intradiários disponíveis
  has_eod: boolean; // Indica se há dados de fechamento disponíveis
  country: string | null; // País da empresa (pode ser nulo)
  stock_exchange: StockExchange; // Informações sobre a bolsa de valores
}

// interfaces/Pagination.ts
export interface Pagination {
  limit: number; // Limite de itens por página
  offset: number; // Offset para a paginação
  count: number; // Contagem total de itens na página atual
  total: number; // Total de itens disponíveis
}

// interfaces/TickerApiResponse.ts
export interface TickerApiResponse {
  pagination: Pagination; // Informações de paginação
  data: Ticker[]; // Array de tickers
}

// interfaces/ExchangeApiResponse.ts
export interface ExchangeApiResponse {
  pagination: Pagination; // Informações de paginação
  data: StockExchange[]; // Array de bolsas de valores
}
