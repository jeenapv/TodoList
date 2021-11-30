import React,{useState} from "react";
import { Button,  Form } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { addTodo } from '../actions/todoActions';
import { useNavigate } from "react-router-dom";

function AddTodo() {
    const [value, setValue] = useState("");
    const history = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      dispatch(addTodo(value));
      setValue("");
      history('/');
    };
  
    return (
        <div className="app">
          <div className="container">
            <Form onSubmit={handleSubmit}> 
              <Form.Group>
              <Form.Control type="text" className="input mb-3" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
              </Form.Group>
              <Button variant="primary" style={{marginRight:"10px"}} type="submit" disabled={!value} >
                Submit
              </Button>
              <Button variant="secondary" type="dark" onClick={()=>history('/')} >
                Cancel
              </Button>
        </Form>
      </div>
    </div>
    );
  }

  export default AddTodo;

