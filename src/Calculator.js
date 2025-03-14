import React from 'react';

const Calculator = ({ people, setPeople, distance, setDistance }) => {


    return (
        <div className="calculator-container">
            <div className="calculator">
                <label htmlFor="people">Number of people:</label>
                <input type="number" id="people" name="people" value={people} onChange={(e) => setPeople(e.target.value)} />
                <label htmlFor="distance">Distance (miles):</label>
                <input type="number" id="distance" name="distance" value={distance} onChange={(e) => setDistance(e.target.value)} />
            </div>
        </div>
    );

};

export default Calculator;