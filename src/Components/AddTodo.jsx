import React from "react";
import { Button, Card, Form } from 'react-bootstrap';
import {addTodo} from '../MockData';
import {
    useNavigate
  } from "react-router-dom";

function AddTodo({ addTodoList }) {
    const [value, setValue] = React.useState("");
  const history=useNavigate();
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      const todo =addTodo(value);
      console.log("todo",todo)
      setValue("");
      history('/');
    };
  
    return (
        <div className="app">
       <div className="container">
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
    </div>
    );
  }

  export default AddTodo;

