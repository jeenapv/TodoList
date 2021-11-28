
import React ,{useState} from "react";

import { Button, Card, Form ,Modal} from 'react-bootstrap';
function Example({show, handleClose, handleShow, removeTodo}) {
    // const [show, setShow] = useState(false);
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    return (
      <>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to delete this todo?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={removeTodo}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Example;