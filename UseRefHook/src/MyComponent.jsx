import { useState, useEffect, useRef } from 'react'

function MyComponent() {

    // let [number, setNumber] = useState(0);
    const ref = useRef(0);
    // useRef() returns a ref object, with a single current property initially set to the initial value you provided
    // so if you pass a value in useRef(value) it will become the current property

    console.log(ref); // returns a current: 0 , as an object with 1 property

    const inputRef = useRef(null); //ref object can also referred as html elements thats why its useful
    const inputRef1 = useRef(null);

    useEffect(() => {
        console.log("RENDERED !");
        console.log(inputRef);
    })

    function handleClick() {
        // setNumber(prevNumber => prevNumber + 1);
        // ref.current = ref.current + 1; //ref.current gets its value
        // ref.current++;
        // console.log(ref.current); //you can see that the value changes in console w/o rerendering

        inputRef.current.focus(); //wont cause a rerender
        inputRef.current.style.backgroundColor = "yellow"; //changes bg without rerendering
        inputRef1.current.style.backgroundColor = "";
    }

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef.current.style.backgroundColor = "";
    }

    return (<>
        <button onClick={handleClick}>Click Me</button>
        {/* <p>{number}</p> */}
        {/* <p>{ref.current}</p> dili ma re-render so dili ma change ang 0 value sa DOM */}

        {/* html ref attributes */}
        <input ref={inputRef} />
        {/* note that we can have as many as needed ref in a component without rerendering */}

        <button onClick={handleClick1}>Click Me 1</button>
        <input ref={inputRef1} />
    </>)
}

export default MyComponent

// USE useRef() to avoid uneccessary re-rendering to ur component