function List() {
    // array of string
    const fruits = ["apple", "orange", "grapes", "coconut",]
    fruits.sort(); //sort from a-z

    const listItems = fruits.map(fruit => <li key={fruit}>{fruit}</li>)
    //will have a console warning if key arent assign   

    // return (fruits) //this return all list elements in 1 string

    return (<ol> {listItems}</ol>)
}

export default List