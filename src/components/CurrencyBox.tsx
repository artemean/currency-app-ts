import React from "react";
import { formatDollar } from "../utils/utils";
import { Currency } from "../types/types";
import styles from "./currency-box.module.scss";

const CurrencyBox = ({ name, value }: Currency) => (
  <div className={styles.wrap}>
    <img
      alt={`${name} flag`}
      src={`https://www.countryflags.io/${name.slice(0, 2)}/flat/32.png`}
    />
    <span className={styles.name}>{name}</span> -{" "}
    <span className={styles.value}>{formatDollar(value, name)}</span>
  </div>
);

export default CurrencyBox;
