import React, { useState } from 'react'
import './App.css'
import './App.sass'

function Content() {
    const[todos, setTodos] = useState([])
    const[todoItem, setTodoItem] = useState("")

    const handleClick = () => {
        setTodos(todos => [...todos, todoItem])
    }

    const updateTodoItem = ({target}) => {
        setTodoItem(target.value)
    }

    const keyPressed = (key) => {
        key === "Enter" && handleClick()
    } 

    const submitHandler = e => {
        e.preventDefault()
    }
    
    const Todo = ({todoItem}) => <div>{todoItem}</div>
    
    return(
        <div>
            {todos.map((todoItem, i) => (
                <Todo 
                    todoItem = {todoItem}
                    key={todoItem+i}
                />
            ))}
            <br />
            
            <div>
                <form onSubmit={submitHandler}>
                    <input
                        className = "input" 
                        placeholder="Let's build a new Twitter"
                        type="text"
                        onChange={updateTodoItem}
                        onKeyPress={keyPressed}
                    />
                    <button 
                        className="button"
                        type="button"
                        onClick={handleClick}    
                    >
                        Post!
                    </button>
                </form>
            </div>
            

        </div>
    )
}

export default Content