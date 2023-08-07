import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../App.css";


 const ReminderList = () => {
    const navigate = useNavigate();
    const baseURL = "http://localhost:8080";
    const[reminder, setReminder ] = useState();


    const setReminderData = () => {
        axios.get(baseURL + "/reminders").then((response) =>{
            setReminder(response.data);

        }).catch((err) =>  {
            alert("Error Ocurred while loading data:");
          });
    }

    useEffect(() => {
        setReminderData();
      }, []);
    
    const removeReminder = (id) =>{
        axios.delete(baseURL + "/reminder/" + id).then((response) =>{
            alert("Reminder record " + id + " deleted!");
            setReminderData();
            navigate('/read')
        }).catch(error => {
            alert("Error Ocurred in removeReminder:" );
          });
    }

    const removeAllReminder = (id) => {
        axios.delete(baseURL + "/reminder").then((response) => {
          alert("All Reminders deleted!");
          setReminderData();
          navigate('/read')
        }).catch(error => {
          alert("Error Ocurred in removeRminder:" );
        });
      }
    return(
        <div class="card-body">
        <br>
        </br>
        <nav>
          <button
            className="btn btn-primary nav-item active"
            onClick={() => navigate("/create")}>
            Create New Reminder
          </button>
        </nav>
  
  
        <br></br>
        <div className="col-md-6">
          <h4>Reminder List</h4>
  
          <div class="container">
            <div class="row">
              <div class="col-12">
                <table class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Time</th>
                      <th scope="col">Action</th>
  
                    </tr>
                  </thead>
                  <tbody>
  
                    {
                      reminder &&
                      reminder.map((reminder, index) => (
  
                        <tr>
                          <th scope="row">{reminder.id}</th>
                          <td>{reminder.name}</td>
                          <td>{reminder.time}</td>
  
  
                          <td >
  
                            <Link to={"/edit/" + reminder.id}>
                            </Link>
  
  
                            <button
                              onClick={() => removeReminder(reminder.id)} className="button"
                            > 
                            </button>
  
                          </td>
                        </tr>
  
                      ))
                    }
  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button className="btn btn-sm btn-danger"
            onClick={() => removeAllReminder()}>
            Remove All
          </button>
        </div>
  
      </div>
  
    );

}

export default ReminderList;




