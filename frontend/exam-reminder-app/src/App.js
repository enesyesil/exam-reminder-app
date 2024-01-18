import {Routes,Route,Navigate} from "react-router-dom";
import ReminderList from './components/reminder-list';
import SetReminder from './components/set-reminder';
import ReminderForm from "./components/edit-reminder";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
<div class="container mx-auto p-4 shadow-lg mb-4">

{/* Card Header */}
<div class="bg-white py-2 px-4 rounded-t-lg">
  <h4 class="text-lg font-semibold">Exam Reminder App</h4>
</div>

{/* Routes */}
<div class="bg-white py-2 px-4 rounded-b-lg">
  <Routes>
    <Route path="/" element={<Navigate to="/read" />} />
    <Route exact path="/create" element={<SetReminder/>}/>
    <Route exact path="/read" element={<ReminderList/>}/>
    <Route exact path="/edit/:id" element={<ReminderForm/>}/>
  </Routes>
</div>

</div>
          

   
  );
}

export default App;
