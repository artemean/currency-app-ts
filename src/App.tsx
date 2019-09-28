import React, {useState, useEffect} from 'react';
import CurrencyListCom from "./components/CurrencyList";
import './App.css';

const App: React.FC = () => {
  const [currencies, setCurrencies] = useState();
  const getData = async () => await (await fetch('https://api.exchangeratesapi.io/latest')).json();
  let preparedList: {name: string, value: number}[] = [];
  useEffect(() => {
    if (!currencies) {
      getData().then(data => setCurrencies(data));
    }
  });

  if (currencies) {
    const {base, date, rates} = currencies;
    preparedList = Object.keys(rates).map(key => ({
      name: key,
      value: rates[key]
    }));
  }
  console.log(preparedList);

  return (
    <div className="App">
      <CurrencyListCom currencies={preparedList} />
    </div>
  );
};

export default App;
