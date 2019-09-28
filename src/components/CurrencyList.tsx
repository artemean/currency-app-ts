import React from 'react';
import CurrencyBox from "./CurrencyBox";
import {CurrencyList} from '../types/types';
import {Currency} from '../types/types';

const CurrencyListCom: React.FC<CurrencyList> = ({currencies}) => (
    <div className="currency-list">
        {currencies.map((currency: Currency)  => <CurrencyBox key={currency.name} name={currency.name} value={currency.value} />)}
    </div>
);

export default CurrencyListCom;
