import React, { useState, useEffect } from 'react';
import WorldTime from 'react-world-time';
import CurrencyExchange from 'react-currency-exchange';

function App() {
  const [currencyRates, setCurrencyRates] = useState({});

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => setCurrencyRates(data.rates));
  }, []);

  return (
    <div className="App">
      <div>
        <h2>London</h2>
        <WorldTime timezone="Europe/London" />
        <CurrencyExchange from="USD" to="GBP" rates={currencyRates} amount={1} />
      </div>
      <div>
        <h2>Tel Aviv</h2>
        <WorldTime timezone="Asia/Jerusalem" />
        <CurrencyExchange from="USD" to="ILS" rates={currencyRates} amount={1} />
      </div>
      <div>
        <h2>Sunnyvale</h2>
        <WorldTime timezone="America/Los_Angeles" />
        <CurrencyExchange from="USD" to="USD" rates={currencyRates} amount={1} />
      </div>
    </div>
  );
}

export default App;