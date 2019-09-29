export interface Currency {
  name: string;
  value: number;
}

export interface CurrencyResponse {
  rates: {
    [key: string]: number;
  };
  date: string;
  base: string;
}

export type CurrencyList = Currency[];
