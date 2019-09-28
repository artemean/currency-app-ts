import React from 'react';
import {formatDollar} from '../utils/utils';
import {Currency} from '../types/types';

const CurrencyBox: React.FC<Currency> = ({name, value}) => (
    <div className="currency-box">
        <span>{name}</span> -- {formatDollar(value)}
    </div>
);

export default CurrencyBox;
