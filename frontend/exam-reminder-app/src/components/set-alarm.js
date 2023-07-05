import React, {useState} from 'react';


const SetAlarm = ({onAdd}) => {
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (time.trim()) {
        onAdd({ time });
        setTime('');
      }
};

return (
    <form onSubmit={handleSubmit}>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Add End Time </button>
    </form>
  );
};

export default SetAlarm;