//Necessary imports
import React, { useState, useEffect } from 'react';
import './App.css';
//Imported components
import Form from "./components/Form"
import ToDoList from "./components/TodoList"

function App() {
  //States that keep track of data
  const [inputText, setInputText] = useState("");
  const [Todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setfilteredTodos] = useState([]);
  //getLocalTodos runs on re-render
  useEffect(() => {
    getLocalTodos();
  }, [])
  //functions that run when Todos and status changes
  useEffect(() => {
    filterHandler();
    saveLocalTodos();

  }, [Todos, status]);
  //Function that filters according to the
  //select elems
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(Todos.filter(todo => todo.completed));
        break;
      case "uncompleted":
        setfilteredTodos(Todos.filter(todo => !todo.completed));
        break;
      default:
        setfilteredTodos(Todos);
        break;
    }
  };
  //Stores data in localstorage as JSON
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(Todos));
  }
  //Gets the JSON data and parses it 
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else {
      const localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Things to be done: </h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        Todos={Todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <ToDoList setTodos={setTodos} Todos={Todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
