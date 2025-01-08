import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Счётчик: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
        </div>
    );
};

export default Counter;
