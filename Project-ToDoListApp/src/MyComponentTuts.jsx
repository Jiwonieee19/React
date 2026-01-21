import React, { useState } from 'react'

function MyComponent() {
    // console.log("hi" + sample.id)
    const [todos, setTodos] = useState([{ id: Date.now(), text: "Sample Shit" }]);
    const [addTodos, setAddTodos] = useState("");

    function handleAddTodo() {
        if (addTodos.trim() === "") return

        setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: addTodos }]);
        setAddTodos("");
    }

    function handleChanges(e) {
        setAddTodos(e.target.value);
    }

    function handleDelete(index) {
        // setTodos(prevTodos => prevTodos.filter((_, i) => i !== index))
        const updatedTodos = (prevTodos => prevTodos.filter((_, i) => i !== index));
        setTodos(updatedTodos);
    }

    function handleOnTop(index) {

        // if (index === 0) return;

        // const newTodos = [...todos]

        // [newTodos[index], newTodos[index - 1]] = [newTodos[index - 1], newTodos[index]]; // solution of bro code, destructuring, but it is just the same on what i wrote on top

        // setTodos(newTodos);

        setTodos(prevTodos => {
            if (index === 0) return prevTodos;

            const newTodos = [...prevTodos];
            [newTodos[index], newTodos[index - 1]] =
                [newTodos[index - 1], newTodos[index]];

            return newTodos;
        }); //BOISET KANI RA DAAY, DLI NA MO WORK TONG ISULOD ANG NEW ARRAY SA SET, DAPAT SA SULOD NA SA SET BUHATON, I THINK MOGANA TON PREVIOUS NAKO
        //WAY PULOS ANG ID NGA DATE NOT INDEX, MOGANA SA PIKAS NGA NAKA INDEX

    }

    function handleOnBot(index) {
        setTodos(prevTodos => {
            if (index === todos.length) return prevTodos;

            const newTodos = [...todos];
            const temp = newTodos[index];
            newTodos[index] = newTodos[index + 1];
            newTodos[index + 1] = temp;

            return newTodos;

        }); //in ani to pagkasulat sa pikas
    }

    return (
        <div className='div-forall'>
            <h1 className='header-title'>To-Do List</h1>
            <div>
                <input type="text" id="todoInput" placeholder="Enter Your Next TO-DO" value={addTodos} onChange={handleChanges} />
                <button onClick={handleAddTodo}>ADD</button>
            </div>
            <br />
            <div className='div-todo-details'>
                {todos.map((todo, index) =>
                    <span key={todo.id}> {todo.text}
                        <div className='div-button'>
                            <button onspanck={() => handleDelete(index)}>Delete</button>
                            <button onClick={() => handleOnTop(index)}>Up</button>
                            <button onClick={() => handleOnBot(index)}>Down</button>
                        </div>
                    </span>)}
            </div>
        </div>
    )

    //this was 2years ago na tuts and i thought skoa code mali, sa key na index na daay, it wont work now sa latest react since 
    // key=0 → still key=0
    // key=1 → still key=1
    // So React assumes nothing moved, and it just updates text instead of reordering DOM nodes.
}

export default MyComponent