import React, { useState } from 'react'

function MyCompo() {

    const [count, setCount] = useState(0);

    // const decrement = () => { setCount(count - 1) }
    // const increment = () => { setCount(count + 1) }
    // const reset = () => { setCount(0) }
    //common approach

    //updater function
    function decrement() { setCount(count - 1) }
    function increment() { setCount(count + 2) }
    function reset() { setCount(0) }

    return (
        <div>
            <p>CURRENT VALUE: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default MyCompo