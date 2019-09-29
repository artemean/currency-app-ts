import React from "react";
import { formatDollar } from "../utils/utils";
import { Currency } from "../types/types";
import styles from "./currency-box.module.scss";

const CurrencyBox: React.FC<Currency> = ({ name, value }) => (
  <div className={styles.wrap}>
    <img src={`https://www.countryflags.io/${name.slice(0, 2)}/flat/32.png`} />
    <span className={styles.name}>{name}</span> -{" "}
    <span className={styles.value}>{formatDollar(value, name)}</span>
  </div>
);

export default CurrencyBox;
