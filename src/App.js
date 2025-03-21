import './App.css';
import React, { useState, useEffect } from 'react';
import Calculator from './Calculator';

function App() {

  // State for inputs and pricing
  const [people, setPeople] = useState(0);
  const [distance, setDistance] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [travelCost, setTravelCost] = useState(0);
  const [price, setPrice] = useState(0);

  // Pricing constants
  const basePrice = 75;
  const pricePerMile = 5;
  const priceSilk = 75;
  const priceRegular = 60;

  // Calculate price based on inputs
  const calculatePrice = () => {
    let tanCost = 0;

    if (distance <= 15) {
      setTravelCost(75);
    } else {
      setTravelCost(75 + (pricePerMile * (distance - 15)));
    }

    selectedOptions.forEach((tan) => {
      if (tan === 'silk/clear') {
        tanCost += priceSilk;
      } else {
        tanCost += priceRegular;
      }
    });

    if (people < 4) {
      setPrice(travelCost + tanCost);
    } else {
      setPrice((0.8 * (tanCost)) + travelCost);
    }
      
  };

  useEffect(() => {
    calculatePrice();
  }
  , [people, distance, selectedOptions]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Calculator
        people={people}
        setPeople={setPeople}
        distance={distance}
        setDistance={setDistance}
        price={price}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        travelCost={travelCost}
      />
    </div>
  );
}

export default App;
