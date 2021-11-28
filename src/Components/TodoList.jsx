import React,{useEffect, useState} from "react";
import { Button, Card, Alert } from 'react-bootstrap';
import { getTodoList, removeTodo, markTodo } from '../MockData';
import { useNavigate} from "react-router-dom";
  import DeleteModal  from "./DeleteModal";

function TodoList() {
  const history = useNavigate();
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(false);

  useEffect(()=> {
   const todoList =  getTodoList();
   setTodos(todoList);
  },[history]);
 

  const handleAddItem = () => {
    history('/add');
  }

  const completeTodoItem =(index) =>{
   markTodo(index);
   const newTodos = [...todos];
   newTodos[index].isDone = true;
    setTodos(newTodos);
  }


  const removeTodoItem = index => {
    removeTodo(index);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setShow(false)
  };

  const handleClose = () =>{
    setShow(false);
  }
  const handleShow = (index) =>{
    setShow(true);
    setId(index)
  }
const handleEdit = (index) =>{
  history(`/edit/${index}`)
}

    return (
        <div>
          {todos?.length===0 && 
            <Alert variant="info">
              <Alert.Heading>Your list is empty</Alert.Heading>
            </Alert>
          }
          {todos.map((todo, index) => (
            <Card key={index}> 
              <Card.Body>
                <div className="todo">
                  <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
                  <div>
                  <Button variant="outline-success mr-5" onClick={() => completeTodoItem(index)} disabled={todo.isDone}>Complete</Button>{" "}
                  <Button variant="outline-secondary" onClick={() => handleEdit(index)} disabled={todo.isDone}>Edit</Button>{" "}
                  <Button variant="outline-danger" onClick={() => handleShow(index)}>Delete</Button>
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

