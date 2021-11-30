import React,{useEffect, useState} from "react";
import { Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {toggleTodo, removeTodo} from "../actions/todoActions";
import { useSelector ,useDispatch} from "react-redux";
  import DeleteModal  from "./DeleteModal";

function TodoList() {
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const [id, setId] = useState(false);
  const todos = useSelector(state => state?.TodoReducer);
  const dispatch = useDispatch();
 

  const handleAddItem = () => {
    history('/add');
  }

  const completeTodoItem =(index) =>{
    dispatch(toggleTodo(index));
  }


  const removeTodoItem = index => {
    dispatch(removeTodo(index));
    setShow(false);
  };

  const handleClose = () =>{
    setShow(false);
  }
  const handleShow = (index) =>{
    setId(index)
    setShow(true);
  }
const handleEdit = (index) =>{
  history(`/edit/${index}`)
}

    return (
        <div>
          {todos?.length===0 ? 
            <Alert variant="info">
              <Alert.Heading>Your list is empty</Alert.Heading>
            </Alert>
          :
          todos.map((todo, index) => (
            <Card key={index}> 
              <Card.Body>
                <div className="todo">
                  <span style={{ textDecoration: todo.complete ? "line-through" : "" }}>{todo.text}</span>
                  <div>
                  <Button variant="outline-success mr-5" onClick={() => completeTodoItem(todo.id)} disabled={todo.complete}>Complete</Button>{" "}
                  <Button variant="outline-secondary" onClick={() => handleEdit(todo.id)} disabled={todo.complete}>Edit</Button>{" "}
                  <Button variant="outline-danger" onClick={() => handleShow(todo.id)}>Delete</Button>
                  <DeleteModal
                    handleClose={handleClose} 
                    show={show}
                    removeTodo={()=>removeTodoItem(id)}
                  />
                </div>
              </div>
              </Card.Body>
              
            </Card>
          ))}
          <Button variant="primary mt-3" onClick={handleAddItem}>
            Add
         </Button>
      </div>
    );
  }

  export default TodoList;

