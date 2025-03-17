import React, { useEffect } from 'react';
import './TanCard.css';

const TanCard = ({ people, selectedOptions, setSelectedOptions }) => {
    
    const handleDropdownChange = (index, { target }) => {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[index] = target.value;
        setSelectedOptions(newSelectedOptions);  
    };

    
        

    return (
        <div className="tan-card-container">
            {Array.from({ length: people }).map((_, index) => (

                <div className="tan-card" key={index}>
                    <select 
                        className="tan-type"
                        value={selectedOptions[index]}
                        onChange={(event) => handleDropdownChange(index, event)}
                        >
                        <option value="silk">Silk</option>
                        <option value="rapid">Rapid</option>
                    </select>
                    <div className="tan-card-content">
                        <h1>{selectedOptions[index]}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TanCard;