// src/api.js
const API_KEY = '2d7e31eb94ec4382952acff59b617c4d'; // Replace with your actual API key
const BASE_URL = `https://api.currencyfreaks.com/latest?apikey=${API_KEY}`;

export const fetchRates = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error("Error fetching currency data:", error);
  }
};
