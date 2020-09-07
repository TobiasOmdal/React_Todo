import React from "react"

const Todo = ({ text, setTodos, Todos, Todo }) => {
    //Manages the deletion of todos by filtering
    //according to status
    const deleteHandler = () => {
        setTodos(Todos.filter((el) => el.id !== Todo.id));
    }
    //Greys out and lines over on complete, 
    //again, according to status
    const completeHandler = () => {
        setTodos(
            Todos.map(item => {
                if (item.id === Todo.id) {
                    return {
                        ...item,
                        completed: !Todo.completed,
                    }
                }
                return item;
            })
        )
    }
    return (
        <div className="todo">
            <li className={`todo-item ${Todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>

    );
}

export default Todo;