import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

let alist = [];
function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState(alist);
// useEffect is used for side effects
    useEffect(()=> {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
      };
     getTasks();
    }, []);
    //Fetch Tasks
    const fetchTasks = async () => { // from json-server
            const res = await fetch("http://localhost:5000/tasks");
            const data = await res.json();
            console.log("Appjs;useEffect;fetchTasks outside;data="+data.length);
            return data;
          };
    let alength = tasks.length;
    // fetchTask
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      return data;
    }

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
    const addTask = async (task) => {
      console.log("Appjs; addTask; created: "+ (task.created) );
      const res = await fetch(
        "http://localhost:5000/tasks", {
          method: "POST",
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(task)
        }
      );
      const data = await res.json();
      setTasks([...tasks, data]);
    };

    const deleteTask = async (id) => {
        //const id = created;
         console.log('Appjs;deleteTask; id= ',id);
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      });
      setTasks(tasks.filter(task => task.id !== id));
      alength = tasks.length;
    };
    // Toggle Reminder
    const toggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id);
      const updTask = {...taskToToggle, 
                       reminder: !taskToToggle.reminder};
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-type":"application/json" },
        body: JSON.stringify(updTask)
      });
      const data = await res.json();
      setTasks(
        tasks.map((task) => 
          task.id === id ? { 
          ...task, reminder: data.reminder
         } : task 
         )
      );
      
      ;
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
