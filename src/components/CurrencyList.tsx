import React from "react";
import CurrencyBox from "./CurrencyBox";
import { CurrencyList, CurrencyResponse, Currency } from "../types/types";

type CurrencyListProps = {
  currencies: CurrencyResponse;
};

const prepareCurrencyList = (currencies: CurrencyResponse): CurrencyList =>
  Object.keys(currencies.rates).map(key => ({
    name: key,
    value: currencies.rates[key],
    base: currencies.base
  }));

const CurrencyListCom = ({ currencies }: CurrencyListProps) => (
  <div className="currency-list">
    {prepareCurrencyList(currencies).map((currency: Currency) => (
      <CurrencyBox
        key={currency.name}
        name={currency.name}
        value={currency.value}
      />
    ))}
  </div>
);

export default CurrencyListCom;
