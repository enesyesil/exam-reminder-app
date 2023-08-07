import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import axios from "axios";


const SetReminder = () => {
  const baseURL = "https://64d1657aff953154bb7a4ad6.mockapi.io/reminder";
  const navigate = useNavigate();
  const [name, setRoomName] = useState('');
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
    name: name,
    time : time
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
        <Form.Label>Room Name</Form.Label>
        <Form.Control type="text" value={name} onChange={nameChangeHandler} placeholder="Enter Room Name" required/>
    </Form.Group>
    <Form.Group  controlId="form.Role">
        <Form.Label>Time</Form.Label>
        <Form.Control type="time" value={time} onChange={timeChangeHandler} placeholder="Enter Time" required/>
    </Form.Group>
    <br></br>
    <Button type='submit'>Add Reminder</Button>
    &nbsp;&nbsp;&nbsp;
    <Button type='submit' onClick={()=>cancelHandler()}>Cancel</Button>
  </Form>

</Container>
</Alert>

);







  
};




  

export default SetReminder;