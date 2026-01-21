import { elementType } from 'prop-types';
import { useState } from 'react'

function MyComponent() {
    const [fishes, setFish] = useState(["Molly", "Betta"]);

    function handleAddFish() {
        const newFish = document.getElementById("fishInput").value; //pede anion pag retreive sa value sa input
        document.getElementById("fishInput").value = "";
        // setFish([...fishes, newFish]); //but practicing updater function is much better
        setFish(prevFishes => [...prevFishes, newFish]);
    }

    function handleRemoveFish(index) {
        setFish(fishes.filter((_, i) => i !== index))
        //i !== index means we are rewriting the array without the choosen one to be removed
        //if element is not useful or wut, we can convert it into _ , this shows you ignored a parameter purposely
    }

    return (<div>
        <h2>List of Fish</h2>
        <ul>
            {fishes.map((fish, index) => <li key={index} onClick={() => handleRemoveFish(index)}> {fish} </li>)}
        </ul>
        <input type="text" id="fishInput" placeholder="Input A Fish Name" />
        <button onClick={handleAddFish}>Submit</button>
    </div>)
}

export default MyComponent