// src/components/CurrencyTable.js
import React, { useState, useEffect } from 'react';
import { fetchRates } from '../api';
import CurrencyRow from './CurrencyRow';

const CurrencyTable = () => {
  const [rates, setRates] = useState({});
  const currencies = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];

  useEffect(() => {
    const getRates = async () => {
      const data = await fetchRates();
      setRates(data);
    };
    getRates();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>We Buy</th>
          <th>Exchange Rate</th>
          <th>We Sell</th>
        </tr>
      </thead>
      <tbody>
        {currencies.map(currency => (
          <CurrencyRow key={currency} currency={currency} rate={rates[currency]} />
        ))}
      </tbody>
    </table>
  );
};

export default CurrencyTable;
