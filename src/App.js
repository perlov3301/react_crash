import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

let alist = [
//   {
//       id: 1,
//       text: "Doctors Appointment1",
//       day: 'Feb 4th at 2:30pm',
//       reminder: true,
//       created: 1900301123  },
//   {
//       id:2,
//       text: 'Meeting at School',
//       day: 'Feb 6th at 1:30pm',
//       reminder: true,
//       created: 1901301123,
//   },
//   {
//       id: 3,
//       text: 'Food Shopping',
//       day: 'Feb 5th at 2:30pm',
//       reminder: true,
//       created: 1902301123,
//   },
];
function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState(alist);
// useEffect is used for side effects
    useEffect(()=> {
     
      fetchTasks();
    }, []);
    const fetchTasks = async () => {
      // from json-server
            const res = await fetch("http://localhost:5000/tasks");
            const data = await res.json();
            console.log("Appjs;useEffect;fetchTasks;data="+data);
            return data;
          };
    let alength = tasks.length;

    const onAdd = () => {
      const a = !showAddTask;
      setShowAddTask(a);
      if(a) {
        const color = 'red';
        const btnText = 'closeAdd'
    } else {
      const color = 'green';
      const btnText = 'openAdd'
    }
    };
    const addTask = (task) => {
      // console.log("Appjs; addTask; created: "+ (task.created) );
      const id = Math.floor(Math.random()*10000)+1;
      const newTask =  
        { id, ...task 
          // id:id, 
          // text:task.text, 
          // day:task.day, 
          // reminder: task.reminder,
          // created: task.created
        }
        ;
      setTasks([...tasks, newTask]);
    };

    const deleteTask = (created) => {
      //  console.log('Appjs;delete ',created);
      setTasks(tasks.filter(task => task.created !== created));
      alength = tasks.length;
    };
    // Toggle Reminder
    const toggleReminder = (created) => {
      setTasks(
        tasks.map((task) => 
          task.created === created ? { 
          ...task, reminder: !task.reminder
         } : task 
         )
      );
    };
  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
        
      />
      {showAddTask && <AddTask   onAdd={addTask} />}
      
      {
        alength===0 ? (<p style={{textAlign: 'center'}}>No Tasks To Show</p>) : 
        <Tasks tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
       />
      }
    </div>
  );
}

export default App;
