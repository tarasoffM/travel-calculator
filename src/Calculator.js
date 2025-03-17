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
            setSelectedOptions([...selectedOptions, ...Array(newPeople - selectedOptions.length).fill('silk')]);

        } else {
            setSelectedOptions(selectedOptions.slice(0, newPeople));
        }
    }

    return (
        <div className="calculator-container">
            <div className="calculator">
                <div className="inputs">
                    <label htmlFor="people">Number of people:</label>
                    <input type="number" id="people" name="people" value={people} onChange={handlePeopleChange} />
                    <label htmlFor="distance">Distance (miles):</label>
                    <input type="number" id="distance" name="distance" value={distance} onChange={(e) => setDistance(e.target.value)} />
                </div>

                <div className="cards">
                    <TanCard people={people} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />                    
                </div>
                <div className="price-container">
                    <div className="deposit">
                        <label>Deposit/Travel Fee:</label>
                        <p>${travelCost}</p>
                    </div>
                    <div className="per-person">
                        <label>Total cost per person (including deposit):</label>
                        <p>${(price/people).toFixed(2)}</p>                    
                    </div>
                    <div className="total">
                        <label>Total Price:</label>
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Calculator;