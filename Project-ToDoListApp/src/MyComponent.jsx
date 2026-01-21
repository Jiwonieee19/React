import React, { useState } from 'react'

function MyComponent() {
    const [todos, setTodos] = useState(["Sample No Tuts"]);

    function handleAddTodo() {
        const newTodo = document.getElementById("todoInput").value;
        if (newTodo.trim() === "") return
        setTodos(prevTodos => [...prevTodos, newTodo])
        document.getElementById("todoInput").value = "";
    }

    function handleDelete(index) {
        setTodos(prevTodos => prevTodos.filter((_, i) => i !== index))
    }

    function handleOnTop(index) {

        setTodos(prevTodos => {
            if (index === 0) return prevTodos;

            const newTodos = [...todos]

            const temp = newTodos[index - 1];
            newTodos[index - 1] = newTodos[index];
            newTodos[index] = temp;

            return newTodos;
        }); //try daw ani nga swap but gisulod na dtso sa set function

    }

    function handleOnBot(index) {

    }

    return (
        <div>
            <h2>To-Do-List</h2>
            <div>
                <input type="text" id="todoInput" placeholder="Enter Your Next TO DO" />
                <button onClick={handleAddTodo}>ADD</button>
            </div>
            <br />
            {todos.map((todo, index) => <div>
                <div key={index}>
                    <li> {todo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <button onClick={() => handleOnTop(index)}>Up</button>
                        <button>Down</button>
                    </li>
                </div>
            </div>)}
        </div>
    )
}

export default MyComponent