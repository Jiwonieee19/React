import { useState } from 'react'

function MyCompo() {

    const [fish, setFish] = useState({ breed: "GoldFish", age: 6, color: "Orange", })

    function handleChanges(e) {

        const { name, value } = e.target; // new approach unlocked, efficient usage of destructuring
        // setFish({ ...fish, [name]: value }); // variable + [] to look for similar name inside an object, real usage of spread ...
        setFish(prevFish => ({ ...prevFish, [name]: value })); //practice updater function
    }

    return (
        <div>
            <p>My Fav Fish is {fish.breed}, {fish.age} months old, color {fish.color}</p>
            <input type="text" name="breed" value={fish.breed} onChange={(e) => handleChanges(e)}></input><br />
            <input type="number" name="age" value={fish.age} onChange={(e) => handleChanges(e)}></input><br />
            <input type="text" name="color" value={fish.color} onChange={(e) => handleChanges(e)}></input><br />
        </div>
    )
}

export default MyCompo