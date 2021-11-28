import React from "react";
import { Button, Card, Form } from 'react-bootstrap';
import {getTodoId,updateTodo} from '../MockData';
import { useParams,useNavigate } from 'react-router-dom';


function UpdateTodo() {
  let { id } = useParams();
  const history= useNavigate();
  console.log("getTodoId",getTodoId(id))
    const [value, setValue] = React.useState(getTodoId(id)?.text);
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      updateTodo(value,id);
      setValue("");
      history("/")
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input mb-3" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{marginRight:"10px"}} disabled= {(getTodoId(id).text )=== value}>
        Submit
      </Button>
      <Button variant="secondary" type="dark" onClick={()=>history('/')} >
          Cancel
        </Button>
    </Form>
    );
  }

  export default UpdateTodo;

