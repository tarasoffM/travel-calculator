import './App.css';
import React, { useState } from 'react';
import Calculator from './Calculator';

function App() {

  // State for inputs
  const [people, setPeople] = useState(1);
  const [distance, setDistance] = useState(0);

  // Pricing constants
  const basePrice = 75;
  const pricePerMile = 5;
  const priceSilk = 90;
  const priceRapid = 60;

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Calculator
        people={people}
        setPeople={setPeople}
        distance={distance}
        setDistance={setDistance}
        basePrice={basePrice}
        pricePerMile={pricePerMile}
        priceSilk={priceSilk}
        priceRapid={priceRapid}
      />
    </div>
  );
}

export default App;
