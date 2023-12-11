import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
    console.log("Tasksjs;");
    return (
        <>
          { tasks.map((task) => (
            <Task key={task.created} 
              task={task} 
              onDelete={onDelete} 
              onToggle={onToggle}
            />
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
