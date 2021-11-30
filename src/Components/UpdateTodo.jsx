import React, {useState} from "react";
import { Button, Form } from 'react-bootstrap';
import { useSelector ,useDispatch } from "react-redux";
import { useParams,useNavigate } from 'react-router-dom';
import { getTodoId, updateTodo } from '../actions/todoActions';


function UpdateTodo() {
  let { id } = useParams();
  const history= useNavigate();
  const dispatch = useDispatch();

  const todoItem = useSelector(state => state?.TodoReducer);
  const selectedItem = todoItem.find(item=> { return item.id === parseInt(id)});
  const [value, setValue] = useState(selectedItem?.text);
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      dispatch(updateTodo(id,value));
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
        Update
      </Button>
      <Button variant="secondary" type="dark" onClick={()=>history('/')} >
          Cancel
        </Button>
    </Form>
    );
  }

  export default UpdateTodo;

