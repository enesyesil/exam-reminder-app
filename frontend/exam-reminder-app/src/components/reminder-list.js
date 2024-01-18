import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../App.css";


 const ReminderList = () => {
    const navigate = useNavigate();
    const baseURL = "https://64d1657aff953154bb7a4ad6.mockapi.io";
    const[reminder, setReminder ] = useState();


    const setReminderData = () => {
        axios.get(baseURL + "/reminder").then((response) =>{
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
          alert("Error Ocurred in removeReminder:" );
        });
      }
    return(
      <div class="card-body">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/create")}>
            Create New Reminder
          </button>
        </div>
    
        <div class="mb-6">
          <h4 class="text-gray-700 text-lg font-semibold">Reminder List</h4>
          <div class="mt-4">
            <div class="align-middle inline-block min-w-full">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {
                      reminder &&
                      reminder.map((reminder, index) => (
                        <tr key={index}>
                          <td class="px-6 py-4 whitespace-nowrap">{reminder.id}</td>
                          <td class="px-6 py-4 whitespace-nowrap">{reminder.name}</td>
                          <td class="px-6 py-4 whitespace-nowrap">{reminder.time}</td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <Link to={"/edit/" + reminder.id} class="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </Link>
                            <button
                              onClick={() => removeReminder(reminder.id)}
                              class="text-red-600 hover:text-red-900 ml-4"
                            >
                              Delete
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
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm mt-4"
            onClick={() => removeAllReminder()}>
            Remove All
          </button>
        </div>
      </div>
    </div>
    
    );

}

export default ReminderList;




