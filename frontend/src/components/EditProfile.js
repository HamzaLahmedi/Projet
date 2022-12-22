import React, { useState } from "react";

import { FormControl, Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/actions/contactActions";

function EditProfile({ user }) {
  const [show, setShow] = useState(false);
  const [userName, setName] = useState(user.userName);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);
  const [phone, setPhone] = useState(user.phone);
  const [description, setDescription] = useState(user.description);
  const [role, setRole] = useState(user.role);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const confirm = () => {
    dispatch(
      updateProfile(user._id, {
        userName,
        email,
        age,
        phone,
        description,
        role,
      })
    );

    handleClose();
  };

  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={handleShow} style={{ backgroundColor: "blue" }}>
        Edit user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            type="text"
            value={userName}
            onChange={(e) => setName(e.target.value)}
          />
          <FormControl
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <FormControl
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {/* <FormControl
            type="text"
            value={langue}
            onChange={(e) => setLangue(e.target.value)}
          /> */}
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select
              id="disabledSelect"
              name="langue"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="musician">musician</option>

              <option value="band">band</option>

              
            </Form.Select>
          </Form.Group>
          <FormControl
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={confirm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfile;
