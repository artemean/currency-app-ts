import React, {useState, useEffect} from 'react';
import CurrencyListCom from "./components/CurrencyList";
import {Currency} from "./types/types";
import './App.scss';

const App: React.FC = () => {
  const [currencies, setCurrencies] = useState();
  const getData = async () => await (await fetch('https://api.exchangeratesapi.io/latest')).json();
  let preparedList: Currency[] = [];
  useEffect(() => {
    if (!currencies) {
      getData().then(data => setCurrencies(data));
    }
  });

  if (currencies) {
    preparedList = Object.keys(currencies.rates).map(key => ({
      name: key,
      value: currencies.rates[key],
      base: currencies.base
    }));
  }
  console.log(preparedList);

  return (
    <div className="currency-app">
      <h1>Currencies App</h1>
      <h2>Base currency: {currencies && currencies.base}</h2>
      <h3>For date: {currencies && currencies.date}</h3>
      <CurrencyListCom currencies={preparedList} />
    </div>
  );
};

export default App;
