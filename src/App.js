import React, { useState, useEffect } from 'react';
import WorldTime from 'react-world-time';

function App() {
  const [currencyRates, setCurrencyRates] = useState({});

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(console.log('currency rates'))
      .then(data => setCurrencyRates(data.rates));
  }, []);

  return (
    <div className="App">
      <div>
        <h2>London</h2>
        <WorldTime timezone="Europe/London" />
      </div>
      <div>
        <h2>Tel Aviv</h2>
        <WorldTime timezone="Asia/Jerusalem" />
      </div>
      <div>
        <h2>Sunnyvale</h2>
        <WorldTime timezone="America/Los_Angeles" />
      </div>
    </div>
  );
}

export default App;