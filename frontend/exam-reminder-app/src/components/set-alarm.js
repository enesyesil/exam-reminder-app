import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'bootstrap';

const SetReminder = ({onAdd}) => {
    const [roomName, setRoomName] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (time.trim()) {
        onAdd({ time });
        setTime('');
      }
      setRoomName('');

};

return (


    <Form onSubmit={handleSubmit}>

 <Form.Control size="lg" type="text" placeholder="Large text" value={roomName}
      onChange={(e) => setRoomName(e.target.value)} />
      <br />
      

     
      
<Form.Control size="lg" type="time" placeholder="Large text" 
 value={time}
 onChange={(e) => setTime(e.target.value)} />

      <br />
      <button type="submit">Set Reminder</button>
    </Form>
  );
};

export default SetReminder;