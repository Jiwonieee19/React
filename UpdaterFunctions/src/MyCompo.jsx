import React, { useState } from 'react'

function MyCompo() {

    const [count, setCount] = useState(0);

    // const decrement = () => { setCount(count - 1) }
    // const increment = () => { setCount(count + 1) }
    // const reset = () => { setCount(0) }
    //common approach

    //updater function
    function increment() {
        setCount(count + 2)
        setCount(count + 2)
        setCount(count + 2) //count should be +6 here, but even though its written like this, only 1 setcount can be updated 

        // Because we USES the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update immediately.
        // React batches together state updates for performance reasons.
        // NEXT state becomes CURRENT state after an update.

        // what actually happens on top set, setCount(0 + 1), the count doesnt updated immediately until the function block is done
        // so no matter how many times you wrote it, it is still 0 + something
    };
    function decrement() {
        setCount(prevCount => prevCount - 2);
        // using arrow, this will update immediately even React will batch it first, but we need to use prev + Capital 1st letter, this is official naming convention,
        // naming the pending state as prevCapital or take the first later of variable like c
        setCount(prevCount => prevCount - 2);
        setCount(prevCount => prevCount - 2);
        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (data structure) (waiting in line)
        // During the next render, it will call them in the same order.
    };
    function reset() {
        setCount(prevCount => prevCount = 0); //even if its only 1 time, its a good practice to use updater function for future proof purposes
    };

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