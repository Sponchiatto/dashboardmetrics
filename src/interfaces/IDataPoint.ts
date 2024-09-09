export interface IDataPoint {
  date: string; // Data no formato "yyyy-MM-dd"
  open?: number; // Valor de abertura, opcional
  high?: number; // Valor máximo, opcional
  low?: number; // Valor mínimo, opcional
  close?: number; // Valor de fechamento, opcional
  volume?: number | null; // Volume, pode ser número ou null
  adj_high?: number | null; // Valor ajustado máximo, pode ser número ou null
  adj_low?: number | null; // Valor ajustado mínimo, pode ser número ou null
  adj_close?: number | null; // Valor ajustado de fechamento, pode ser número ou null
  adj_open?: number | null; // Valor ajustado de abertura, pode ser número ou null
  adj_volume?: number | null; // Volume ajustado, pode ser número ou null
  split_factor?: number; // Fator de divisão, opcional
  dividend?: number; // Dividendo, opcional
  symbol?: string; // Símbolo da ação, opcional
  exchange?: string; // Bolsa de valores, opcional
  [key: string]: any; // Permite campos adicionais
}
