import { useState, useEffect } from "react";
import { CURRENCIES_URL } from "../utils/constants";

export const useCurrenciesData = () => {
  const [currencies, setCurrenciesData] = useState();
  const [selectedBaseCurrency = "EUR", setSelectedBaseCurrency] = useState();
  const getData = async (currency: string) => {
    return await (await fetch(
      `${CURRENCIES_URL}/latest?base=${currency}`
    )).json();
  };
  useEffect(() => {
    getData(selectedBaseCurrency).then(data => setCurrenciesData(data));
  }, [selectedBaseCurrency]);

  return { currencies, selectedBaseCurrency, setSelectedBaseCurrency };
};
