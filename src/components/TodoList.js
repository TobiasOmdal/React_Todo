import React from "react"
import Todo from "./Todo"

//Component that iterates every todo in Todos and renders it
const ToDoList = ({ Todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        text={todo.text}
                        key={todo.id}
                        Todos={Todos}
                        Todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;