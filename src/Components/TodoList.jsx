import React,{useEffect, useState} from "react";
import { Button, Card, Form } from 'react-bootstrap';
import Todo from "./Todo";
import Header from './Header';
import {getTodoList,removeTodo,markTodo} from '../MockData';
import {
    useNavigate
  } from "react-router-dom";
  import Example  from "./DeleteModal";

function TodoList({}) {
    const history = useNavigate();
      const [todos, setTodos] = React.useState([]);
  const [show, setShow] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(()=>{
   const val=  getTodoList();
   setTodos(val)
  },[history])
 

  const handleAddItem = () => {
    history('/add');
  }

  const markTodoItem =(index) =>{
   const newTodos= markTodo(index);
   console.log("newTodos",newTodos)
    // const newTodos = [...todos];
    // console.log(" newTodos[index]", newTodos[index])
    // newTodos[index].isDone = true;
    setTodos(newTodos);
  }

  useEffect(()=>{

  }, [])

  const removeTodoItem = index => {
    removeTodo(index);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setShow(false)
  };

  const handleClose = () =>{
    setShow(false)
  }
const handleShow =() => {
  setShow(true);
}

const handleEdit = (index) =>{
  history(`/edit/${index}`)
}

    return (
        <div>
            {/* <Header/> */}
        {todos.map((todo, index) => (
          <Card key={index}
          > 
            <Card.Body>
            <div
        className="todo"
        
      >
        {todo && <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text} {console.log("todo.isDone",todo.isDone)}</span>}
        <div>
          <Button variant="outline-success" onClick={() => markTodoItem(index)}>Complete</Button>{' '}
          <Button variant="outline-secondary" onClick={() => handleEdit(index)}>Edit</Button>{' '}
          <Button variant="outline-danger" onClick={() => handleShow()}>Delete</Button>
        </div>
      </div>
            </Card.Body>
            <Example handleShow={handleShow} handleClose={handleClose} show={show} removeTodo={()=>removeTodoItem(index)}/>
          </Card>
        ))}
        <Button variant="primary mt-3" onClick={handleAddItem}>
        Add New
      </Button>
      
      </div>
    );
  }

  export default TodoList;

