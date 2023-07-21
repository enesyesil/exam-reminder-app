import {Routes,Route,Navigate} from "react-router-dom";
import reminderList from './components/reminder-list';
import navFunc from './components/Navbar';
import SetReminder from './components/set-reminder';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/read" />} />
      <Route exact path="/add-reminder" element={<SetReminder/>}/>
      <Route exact path="/reminder-list" element={<reminderList/>}/>
    </Routes>
    
      
    

   
  );
}

export default App;
