
import React  from "react";

import { Button,Modal} from 'react-bootstrap';
function DeleteModal({show, handleClose, removeTodo}) {
    
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

  export default DeleteModal;