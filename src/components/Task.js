import { FaTimes } from 'react-icons/fa';
const Task = ({ task, onDelete, onToggle }) => {
    // console.log("taskjs;reminder="+task.reminder+ " created="+task.created);
    const cssTask = task.reminder ? 'task-reminder' : '';
    return (
        // <div className={`task ${task.reminder ? 'task-reminder': ''}`}
        //       onDoubleClick ={() => onToggle(task.created)} >
           <div className={`task ${cssTask}`} 
              onDoubleClick={() => onToggle(task.created)}
           >
            <h5>
              {/* <b style={{fontSize:'1rem'}}>created:</b>
              {task.created}  */}
               <b style={{fontSize:'1rem'}}>   id:</b>
              {task.id}
              <b style={{fontSize:'1rem'}}>   reminder:</b>
              {task.reminder?"true":"false"} 
              <b style={{fontSize:'1rem'}}>   created:</b>
              {task.created}
            </h5>
            <h3>{task.text} 
              <FaTimes 
                style={{ color:'red', cursor:'pointer' }} 
                onClick={()=>onDelete(task.created)}
            /> 
            </h3>
            <p> {task.day} </p>
        </div>
    ) ;
} ;
export default Task;