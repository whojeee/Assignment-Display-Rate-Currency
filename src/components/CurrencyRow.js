// src/components/CurrencyRow.js
import React from 'react';

const CurrencyRow = ({ currency, rate }) => {
  if (!rate) return null;

  // Konversi nilai string ke float dan format dengan 4 desimal
  const exchangeRate = parseFloat(rate);
  const weBuy = (exchangeRate * 1.05).toFixed(4);  // 5% lebih besar
  const weSell = (exchangeRate * 0.95).toFixed(4); // 5% lebih kecil

  return (
    <tr>
      <td>{currency}</td>
      <td>{weBuy}</td>
      <td>{exchangeRate.toFixed(4)}</td>
      <td>{weSell}</td>
    </tr>
  );
};

export default CurrencyRow;
