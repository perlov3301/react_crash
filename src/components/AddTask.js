import React, { useState, useEffect } from 'react';

const AddTask = ({ onAdd } ) => {
   
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] =useState(false);
    const [created, setCreated] = useState(new Date().getTime());
   
     const onSubmit = (e) => {
       e.preventDefault();
       console.log("AddTaskjs;  onSubmit created:  "+ created);
       if(!text) { 
          alert("Please add a Task");
          return null;
        }
        // onAdd({
        //   text:text,
        //   day: day,
        //   reminder: reminder,
        //   created: created,
        // });
        onAdd({ text, day, reminder, created });
        setText("");
        setDay("");
        setReminder(false);
        setCreated(new Date().getTime());
        console.log("AddTaskjs; after submit setCreated="+created);

     };
    return (
        <form className='add-form' onSubmit={onSubmit} >
            <p>
               {/* text: {text}; 
               day&time: {day};  */}
               {/* reminder: {reminder?'true':'false'};  */}
               latest 'created': {created}
            </p>
            <div className='form-control'>
                <label>Task                </label>
                <input type='text' placeholder='Add Task'
                  value={text}
                  onChange={ (e)=>setText(e.target.value) }
                 />
            </div>
            <div className='form-control'>
                <label>Day & Time                </label>
                <input type='text' placeholder='Day & Time' 
                  value={day}
                  onChange={ (e)=>setDay(e.target.value) }
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder             </label>
                <input type='checkbox' 
                  checked={reminder?true:false}
                  value={reminder}  
                  onChange={(e)=> setReminder(e.currentTarget.checked) }
                />
            </div>

            <input type='submit' value='Save Task' 
               className='btn btn-block'
           />
        </form>
    );
};

export default AddTask;
/**
 const a = new Date();
 const b = a.getTime(); // mlsec
 */