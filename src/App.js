import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log("localStorage", { localStorage });
    console.log("localTodos", localTodos);
    if (localTodos) {
      console.log("localTodos", localTodos);
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodos = (todo) => {
    console.log("Adding a todo", todo);
    console.log("todos before", todos);
    setTodos([...todos, todo]);
    console.log("todos after", todos);
  };

  const markComplete = (id) => {
    console.log("Removing a todo");
    console.log("todos before", todos);
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log("todos after", todos);
  };
  return (
    <Container type="fluid">
      <h1>Todos App with local storage</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
};

export default App;
