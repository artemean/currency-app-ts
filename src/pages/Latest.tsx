import React, { useState, useEffect } from "react";
import CurrencyListCom from "../components/CurrencyList";
import { CurrencyResponse } from "../types/types";

const Latest = () => {
  const [currencies, setCurrencies] = useState();
  const [selectedBaseCurrency = "EUR", setSelectedBaseCurrency] = useState();
  const getData = async (currency: string) => {
    return await (await fetch(
      `https://api.exchangeratesapi.io/latest?base=${currency}`
    )).json();
  };
  useEffect(() => {
    getData(selectedBaseCurrency).then(data => setCurrencies(data));
  }, [selectedBaseCurrency]);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedBaseCurrency(event.target.value);
  };
  const loading = <div>Loading...</div>;

  const renderApp = (currencies: CurrencyResponse) => (
    <div>
      <h2>Base currency: {selectedBaseCurrency}</h2>
      <span className="select-label">Select base currency:</span>
      <select onChange={onChange} name="currency-list" id="currencies-dropdown">
        {Object.keys(currencies.rates).map(currency => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
      <h3>For date: {currencies.date}</h3>
      <CurrencyListCom currencies={currencies} />
    </div>
  );

  return currencies ? renderApp(currencies) : loading;
};

export default Latest;