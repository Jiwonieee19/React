import { useState } from 'react'

function MyComponent() {
    const initialObject = { breed: "OG Fish Breed", age: 0, color: "Fish Color" };
    const [objects, setObjects] = useState([initialObject]);

    function handleAddObject() {
        const newBreed = document.getElementById("breedInput").value;
        const newAge = document.getElementById("ageInput").value;
        const newColor = document.getElementById("colorInput").value;

        const newObject = { breed: newBreed, age: newAge, color: newColor }

        setObjects([...objects, newObject])

        document.getElementById("breedInput").value = ""
        document.getElementById("ageInput").value = ""
        document.getElementById("colorInput").value = ""
    }

    function handleRemoveObject(index) {
        setObjects(prevObjects => prevObjects.filter((_, i) => i !== index));
    }

    function handleBreedChange(event) {

    }

    return (
        <div>
            <h2>List of Fish Details</h2>
            <ul>
                {objects.map((object, index) => <li key={index} onClick={() => handleRemoveObject(index)}>{object.breed}, {object.age}, {object.color}</li>)}
            </ul>
            <input type="text" id="breedInput" placeholder="Enter Breed Type"></input>
            <input type="number" id="ageInput" placeholder="Enter Month Age"></input>
            <input type="text" id="colorInput" placeholder="Enter Dominating Color"></input>
            <button onClick={handleAddObject}>Add Fish</button>
        </div>
    )
}

// HAHAHAAH NI WROK SD NI BLEEHH EZ, () instead of {} sa () => sa mapping huhuhu, if jsx() if js{}, pede ra walay () btw
// i wonder kasi nganu useState gamit sa inputs, an pede rmn tong getElement from updateArray tuts

export default MyComponent