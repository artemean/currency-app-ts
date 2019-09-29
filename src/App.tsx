import React, { useState, useEffect } from "react";
import CurrencyListCom from "./components/CurrencyList";
import { Currency, CurrencyResponse } from "./types/types";
import "./App.scss";

const App: React.FC = () => {
  const [currencies, setCurrencies] = useState();
  const getData = async () =>
    await (await fetch("https://api.exchangeratesapi.io/latest")).json();
  useEffect(() => {
    if (!currencies) {
      getData().then(data => setCurrencies(data));
    }
  });

  const loading = <div>Loading...</div>;

  const renderApp = (currencies: CurrencyResponse) => (
    <div className="currency-app">
      <h1>Currencies App</h1>
      <h2>Base currency: {currencies.base}</h2>
      <select name="currencies-list" id="currencies-dropdown">
        {Object.keys(currencies.rates).map(currency => (
          <option>{currency}</option>
        ))}
      </select>
      <h3>For date: {currencies.date}</h3>
      <CurrencyListCom currencies={currencies} />
    </div>
  );
  console.log(currencies);
  return currencies ? renderApp(currencies) : loading;
};

export default App;
