export interface Currency {
    name: string,
    value: number,
    base: string
}

export type CurrencyList = {
    currencies: Currency[]
};
