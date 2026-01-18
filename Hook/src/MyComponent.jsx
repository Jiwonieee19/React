// instead of using class components, we can use functional-based components that use react hook/features
import React, { useState } from 'react';

function MyComponent() {

    // STRING UPDATE
    // const name = "Guest"; // instead of this one, we can use usestate to dynamically change the value in VDOM too
    const [name, setName] = useState("Guest"); //useSate always return 2 elements, a variable and a setter function
    // everything inside the () of useSate is the initial value/state
    const updateName = () => {
        // name = "Sponge";
        // console.log(name); //it does change the value but not on vdom
        //let not conts, this one demo that the normal variable wont change on VDOM
        setName("Sponge");
    }

    //NUMBER UPDATE
    const [age, setAge] = useState(0);
    const incrementAge = () => { setAge(age + 1) }

    //BOOLEAN TOGGLE
    const [isEmployed, setIsEmployed] = useState(false);
    const toggleIsEmployed = () => { setIsEmployed(!isEmployed) }


    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Add 1 to Age</button>

            <p>Unemployed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleIsEmployed}>Toggle Boolean</button>
        </div>)
}

export default MyComponent