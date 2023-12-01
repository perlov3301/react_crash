import React, { useState, useEffect } from 'react';
const alist = [
    {
        id: 1,
        text: "Doctors Appointment",
        day: 'Feb 4th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30',
        reminder: false,
    }
];
const Tasks = () => {
    console.log("Tasks;");
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        setTasks([...tasks,
            alist.map((el) => { tasks.push(el); })]);
    },[]);
    
    
    return (
        <>
          { tasks.map((task) => (
            <h3 key={task.id}> { task.text } </h3>
          )) }
        </>
    );
};

export default Tasks;
/**
 [
    {
        id: 1,
        text: "Doctors Appointment",
        day: 'Feb 4th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30',
        reminder: false,
    }
];
 */
