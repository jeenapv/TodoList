
import React from "react";
import { Button, Card, Form } from 'react-bootstrap';
import {getTodoId} from '../MockData';
function Todo({  todo,index, markTodoItem, removeTodo }) {
    return (
      <div
        className="todo"
        
      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodoItem(index)}>Complete</Button>{' '}
          <Button variant="outline-secondary" onClick={() => markTodoItem(index)}>Edit</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>Delete</Button>
        </div>
      </div>
    );
  }

  export default Todo;