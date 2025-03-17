import React from 'react';
import TanCard from './TanCard';
import './Calculator.css';

const Calculator = ({ 
                    people, 
                    setPeople, 
                    distance, 
                    setDistance, 
                    price, 
                    selectedOptions,
                    setSelectedOptions,
                    travelCost }) => {

    const handlePeopleChange = ({ target }) => {                  
        const newPeople = parseInt(target.value);
        setPeople(newPeople);
        
        if (newPeople > selectedOptions.length) {
            setSelectedOptions([...selectedOptions, 'silk']);
        } else {
            setSelectedOptions(selectedOptions.slice(0, newPeople));
        }
    }

    return (
        <div className="calculator-container">
            <div className="calculator">
                <label htmlFor="people">Number of people:</label>
                <input type="number" id="people" name="people" value={people} onChange={handlePeopleChange} />
                <label htmlFor="distance">Distance (miles):</label>
                <input type="number" id="distance" name="distance" value={distance} onChange={(e) => setDistance(e.target.value)} />
                <div className="cards">
                    <TanCard people={people} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />                    
                </div>
                <div className="price">
                <label>Deposit/Travel Fee:</label>
                    <p>${travelCost}</p>
                    <label>Price per person:</label>
                    <p>${(price/people).toFixed(2)}</p>                    
                    <label>Total Price:</label>
                    <p>${price}</p>

                </div>
            </div>
        </div>
    );

};

export default Calculator;