import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';


const ReminderForm = () => {
  const editURL = "https://64d1657aff953154bb7a4ad6.mockapi.io/reminder/";
  const navigate = useNavigate();
  const param = useParams();
  const[reminderId, setReminderId] = useState('');
  const [reminderName, setRoomName] = useState('');
  const [reminderTime, setTime] = useState('');
  

  useEffect(() => {
    axios.get(editURL+param.id).then((response) => {
      const reminderData = response.data;
      setReminderId(reminderData.id);
      setRoomName(reminderData.name);
      setTime(reminderData.role);
  
    }).catch(error => {
      alert("Error Ocurred getting employee detail:"+ error);
    });
  }, []);



const nameChangeHandler = (event) => {
  setRoomName(event.target.value);
}

const timeChangeHandler = (event) => {
  setTime(event.target.value);
}

const submitHandler = (event) => {
  event.preventDefault();
   axios.put(editURL+param.id,  {
    name: reminderName,
    time : reminderTime
   }).then((response) => {
    alert("Success!");
    navigate("/read");
   }).catch(error => {
    alert("error==="+error);
  });
}


return(
    <Alert variant='primary'>
    <Container>
    <Form onSubmit={submitHandler} id="data">
    <Form.Group  controlId="form.id">
          <Form.Label>Id</Form.Label>
          <Form.Control value={reminderId} readonly='readonly'/>
      </Form.Group>
      <Form.Group controlId="form.Name">
          <Form.Label>Room Name</Form.Label>
          <Form.Control type="text" value={reminderName} onChange={nameChangeHandler} placeholder="Enter Room Name" required/>
      </Form.Group>
      <Form.Group  controlId="form.Role">
          <Form.Label>Role</Form.Label>
          <Form.Control type="time" value={reminderTime} onChange={timeChangeHandler} placeholder="Enter Time" required/>
      </Form.Group>
      <br></br>
      <Button type='submit'>Update Reminder</Button>
      &nbsp;&nbsp;&nbsp;
      <Button type='submit' onClick={()=>navigate("/read")}>Cancel</Button>
    </Form>
  </Container>
  </Alert>

  );






  
};




  

export default ReminderForm;