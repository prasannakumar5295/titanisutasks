import React, { useState } from 'react';
import '../css/App.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState(0); // Default weight value
  const [height, setHeight] = useState(0); // Default height value
  

  const calculateBMI = (currentWeight, currentHeight) => {
    const heightInMeters = currentHeight / 100;
    return (currentWeight / (heightInMeters * heightInMeters)).toFixed(2);
  };
const [bmi, setBMI] = useState(calculateBMI(weight, height));
  const handleWeightChange = (event) => {
    const newWeight = parseInt(event.target.value, 10);
    setWeight(newWeight);
    setBMI(calculateBMI(newWeight, height));
  };

  const handleHeightChange = (event) => {
    const newHeight = parseInt(event.target.value, 10);
    setHeight(newHeight);
    setBMI(calculateBMI(weight, newHeight));
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2><br/>
      <div className="input-group">
        <label>
          Weight (kg): {weight}
          <input
            type="range"
            min="0"
            max="100"
            value={weight}
            onChange={handleWeightChange}
          />
        </label>
      </div><br/>
      <div>
        <label>
          Height (cm): {height}
          <input
            type="range"
            min="0"
            max="220"
            value={height}
            onChange={handleHeightChange}
          />
        </label>
      </div><br/>
      <div>
        <h3>Your BMI is : {bmi}</h3>
      </div>
    </div>
  );
};

export default BMICalculator;
