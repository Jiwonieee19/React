import { useState } from 'react'

function MyComponent1() {
    const initialObject = { breed: "Fish Breed", age: 0, color: "Fish Color" };
    const [objects, setObjects] = useState([initialObject]);

    const [newBreed, setNewBreed] = useState("")
    const [newAge, setNewAge] = useState()
    const [newColor, setNewColor] = useState("")

    function handleAddObject() {

        if (newBreed && newAge && newColor) {
            const newObject = { breed: newBreed, age: newAge, color: newColor }

            setObjects(prevObjects => [...prevObjects, newObject])
            // setObjects([...objects, newObject
        }

        setNewBreed("")
        setNewAge("")
        setNewColor("")
    }

    return (
        <div>
            <h2>List of Fish Details</h2>
            <ul>
                {/* {objects.map((object, index) => { <li key={index}>{object.breed}, {object.age}, {object.color}</li> })} */}
                {objects.map((object, index) => (<li key={index}>{object.breed}, {object.age}, {object.color}</li>))}
                {/* dapat () daay after => this time */}
                {/* <li>{objects[0].breed}</li> */}
            </ul>

            <input type="text" value={newBreed} onChange={(e) => setNewBreed(e.target.value)}></input>
            <input type="number" value={newAge} onChange={(e) => setNewAge(e.target.value)}></input>
            <input type="text" value={newColor} onChange={(e) => setNewColor(e.target.value)}></input>
            <button onClick={handleAddObject}>Add Fish</button>
        </div>
    )
}

export default MyComponent1

//own analyzation but didnt work ang display