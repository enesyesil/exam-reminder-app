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
<div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
  <div class="container mx-auto">
    <form onSubmit={submitHandler} class="w-full max-w-lg mx-auto pt-6">
      
      {/* Room Name Field */}
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="form.Name">
          Room Name
        </label>
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="form.Name" 
          type="text" 
          placeholder="Enter Room Name" 
          value={name} 
          onChange={nameChangeHandler} 
          required 
        />
      </div>

      {/* Time Field */}
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="form.Role">
          Time
        </label>
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="form.Role" 
          type="time" 
          placeholder="Enter Time" 
          value={time} 
          onChange={timeChangeHandler} 
          required 
        />
      </div>

      {/* Buttons */}
      <div class="flex items-center justify-between">
        <button 
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="submit">
          Add Reminder
        </button>
        <button 
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button" 
          onClick={cancelHandler}>
          Cancel
        </button>
      </div>

    </form>
  </div>
</div>


);







  
};




  

export default SetReminder;