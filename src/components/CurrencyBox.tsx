import React from 'react';
import {formatDollar} from '../utils/utils';
import {Currency} from '../types/types';
import './currency-box.scss';

const CurrencyBox: React.FC<Currency> = ({name, value, base}) => (
    <div className="currency-box">
        <span>{name}</span> - {formatDollar(value, base)}
    </div>
);

export default CurrencyBox;
