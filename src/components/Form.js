import React from "react"


const Form = ({setInputText, setTodos, Todos, inputText, status, setStatus }) => {
    //Manages text from input-field 
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    //Manages the select elements' status
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    //Manages the operations that occurs on 
    //the button click. 
    const submitHandler = (e) => {
        //Prevents default behavior, mainly 
        //preventing the post request
        e.preventDefault();
        //Iterates the todos and gives attributes
        //text, a status and a 'random' id. This 
        //id is used as a simplification, even 
        //though it is terrible practice.
        setTodos([
            ...Todos,
            {
                text: inputText, 
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText("");
    }
    return (
        <form>
            <input value={inputText} type="text" onChange={inputTextHandler} className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form; 