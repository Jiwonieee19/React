import React, { useState, useEffect } from 'react'

function MyComponent() {
    const [count, setCount] = useState(0);
    // RUNS EVERY RE-RENDER
    // useEffect(any function, [dependencies]);
    // useEffect(() => {
    //     document.title = `Count sa useEffect: ${count}`
    // }) // runs every re-render, EVERY component thats been rendered, this will act too

    //RUNS ONLY IF MOUNT
    // useEffect(() => {
    //     document.title = `One Run Only ${count}`
    //     //count wont show here since it only run after first putting something in the count, or first onClick
    //     //One-And-Done Code
    // }, []) //if absent ning empty array, it will run every rerender

    //RUNS ONLY ON MOUNT + WHEN VALUE IS CHANGE
    // useEffect(() => {
    //     document.title = `Count with Value: ${count}`
    // }, [count]) //runs on mount only + when specific value is change
    // //if count is changed, it will run


    const [color, setColor] = useState("green");

    //MULTI DEPENDENCIES
    // useEffect(() => {
    //     document.title = `Multi-Dependencies Count: ${count} ${color}`
    // }, [count]) //if count palang naa, ddto pa mo change ang color na naa sa title if makabalik ug click kang dount, during click ka color, dli ma change ang title

    useEffect(() => {
        document.title = `Count and Color: ${count} ${color}`
    }, [count, color]) //if these are the dependencies, mo render siya every time naay ma change anang duha

    useEffect(() => {
        document.title = `Count and Color: ${count} ${color}`

        return () => {
            // can return when to unmount dependencies or remove it on the dom or event listener or just clean up code
        }
    }, [count, color])

    return (<>
        <p style={{ color: color }}>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Subtract</button>
        <br />
        <button onClick={() => setColor(color === "green" ? "red" : "green")}>Change Color</button>
    </>)
}

// WHY USE useEffectHook??
// to look more organize and readable if when this function will run and so on, 
// since removing the use effect on the top, it will still work (docu.title = `dkfdkdkf`) but will always run every re-render on the code
// to manipulate better of the datas and codes
// NOTE THAT THEY ARE SOME ADVANCE METHOD THAT CAN BE APPLIED INSIDE THE USEEFFECT, LIKE SUBSCRIPTION AND RETURN

export default MyComponent