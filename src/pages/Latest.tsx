import React from "react";
import CurrencyListCom from "../components/CurrencyList";
import { CurrencyResponse } from "../types/types";
import { useCurrenciesData } from "../utils/dataProvider";

function Latest() {
  const {
    currencies,
    selectedBaseCurrency,
    setSelectedBaseCurrency
  } = useCurrenciesData();
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
}

export default Latest;
