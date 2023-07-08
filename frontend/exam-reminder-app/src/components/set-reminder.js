import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
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


  <form onSubmit={handleSubmit}>
     <input
    type="text"
    value={roomName}
    onChange={(e) => setRoomName(e.target.value)}
  />
  <input
    type="time"
    value={time}
    onChange={(e) => setTime(e.target.value)}
  />
  <Button type="submit">Add Alarm</Button>
</form>
  );
};

export default SetReminder;