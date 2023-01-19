import React, { useState } from "react";
import {
  Input,
  InputGroup,
  Form,
  FormGroup,
  Button,
  Container,
} from "reactstrap";

import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("please enter a todo");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    addTodos(todo);

    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter Todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <Button color="success"> Add Todo</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
