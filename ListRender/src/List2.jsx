function List2() {
    // array of objects
    const fruits = [{ id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 66 },
    { id: 3, name: "grapes", calories: 45 },
    { id: 4, name: "coconut", calories: 159 },]

    // SORT OBJECTS
    fruits.sort((a, b) => a.name.localeCompare(b.name))
    //sorts base on the name ALPHABETICAL
    fruits.sort((a, b) => b.name.localeCompare(a.name)) // REVERSE
    fruits.sort((a, b) => a.calories - b.calories) //sort base on calory values
    // - here checks there numericla difference base on ascending order
    fruits.sort((a, b) => b.calories - a.calories) // reverse numerical order

    // FILTER OBJECTS
    const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100)
    const highCalFruit = fruits.filter((fruit) => fruit.calories > 100)

    const itemLists = highCalFruit.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b></li>)
    // will not crash but returns a warning that each list must have unique key


    return (<ol>{itemLists}</ol>)
}

export default List2