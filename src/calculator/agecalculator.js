import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import './calc.css';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const calculateAge = () => {
    const currentDate = new Date();
    const selectedDate = new Date(birthDate);

    if (!isNaN(selectedDate)) {
      const ageInMilliseconds = currentDate - selectedDate;
      const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
      setAge(ageInYears);
    } else {
      setAge('');
    }
  };

  return (
    <div className='calc'>
      <h1 className='calc-title'>Age Calculator</h1>
      <p className='calc-subtitle'>Enter your birthdate:</p>
      <input
        className='form-control w-25 border border-dark'
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={handleBirthDateChange}
      />
      <button className = "btn btn-primary my-3" onClick={calculateAge}>Calculate</button>
      {age !== '' && <p className='h3'>Your age is {age} years.</p>}
    </div>
  );
}

export default AgeCalculator;
