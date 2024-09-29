import React, { useState } from 'react';

const CompWithProps = () => {
  const [inputValue, setInputValue] = useState('');
  const [count1, setCount1] = useState(0);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
        <h1>Count: {count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>
        Increment Count
      </button>
      <h1>Escribe algo:</h1>
      <input 
        type="text" 
        placeholder="Escribe aquí..." 
        value={inputValue} 
        onChange={handleInputChange} 
      />
      <h2>User: {inputValue}</h2>
    </div>
  );
};

export default CompWithProps;
