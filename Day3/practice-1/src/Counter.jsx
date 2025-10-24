import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);


    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    }

    function reset() {
        setCount(0)
    }

    return (
        <div className="cont">
            <h1>Simple Counter</h1>
            <h3>Count: {count}</h3>
            <div className='functions'>
                <button className='increment' onClick={increment}>Increment</button>
                <button className='decrement' onClick={decrement}>Decrement</button>
                <button className='reset' onClick={reset}>Reset</button>
            </div>
            
        </div>
    )
}

export default Counter;