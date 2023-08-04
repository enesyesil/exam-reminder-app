import {Routes,Route,Navigate} from "react-router-dom";
import ReminderList from './components/reminder-list';
import SetReminder from './components/set-reminder';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (

    <div  class="container card mb-4 box-shadow">

        <div class="card-header">
            <h4 class="my-0 font-weight-normal"> Exam Reminder App</h4>
          </div>``

    <Routes>
      <Route path="/" element={<Navigate to="/read" />} />
      <Route exact path="/read" element={<SetReminder/>}/>
      <Route exact path="/read" element={<ReminderList/>}/>
    </Routes>
    
      
    </div>
          

   
  );
}

export default App;
