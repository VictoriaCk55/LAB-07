import React, { useState } from 'react';
const RandomComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const reset = () => {
        setCount(0);
    };
    return (
        <div>
            <h2>Random Counter</h2>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default RandomComponent;
