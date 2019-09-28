export interface Currency {
    name: string,
    value: number
}

export type CurrencyList = {
    currencies: Currency[]
};
