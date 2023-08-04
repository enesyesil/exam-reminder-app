import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import axios from "axios";


const SetReminder = () => {
  const baseURL = "http://localhost:8080/employee";
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState('');
  const [time, setTime] = useState('');


const nameChangeHandler = (event) => {
  setRoomName(event.target.value);
}

const timeChangeHandler = (event) => {
  setTime(event.target.value);
}

const submitHandler = (event) => {
  event.preventDefault();
   axios.post(baseURL , {
    RoomName: roomName,
    Time : time
   }).then((response) => {
    alert("Success!");
    navigate("/read");
   }).catch(error => {
    alert("error==="+error);
  });
}
const cancelHandler = () => {
  setRoomName('');
  setTime('');
  navigate("/read");
}

return(
  <Alert variant='primary'>
  <Container>
  <Form onSubmit={submitHandler}>
    <Form.Group controlId="form.Name">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" value={roomName} onChange={nameChangeHandler} placeholder="Enter User Name" required/>
    </Form.Group>
    <Form.Group  controlId="form.Role">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" value={time} onChange={timeChangeHandler} placeholder="Enter Role" required/>
    </Form.Group>
    <br></br>
    <Button type='submit'>Add Employee</Button>
    &nbsp;&nbsp;&nbsp;
    <Button type='submit' onClick={()=>cancelHandler()}>Cancel</Button>
  </Form>

</Container>
</Alert>

);







  
};




  

export default SetReminder;