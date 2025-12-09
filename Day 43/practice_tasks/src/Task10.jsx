import React, { useState } from 'react'

function Task10() {
  const [task,setTask] = useState(["eat","sleep"])
  function addTask(){
    const newtask = document.getElementById("inputele").value;
    setTask([...task,newtask])
  }
  return (
    
    <div>
        <h1>List of Tasks</h1>
        <ol>
          {task.map(t => <li>{t}</li>)}
        </ol>
        <input type="text" name="task" id="inputele" />
        <button onClick={addTask}>Add new task</button>
    </div>
  )
}

export default Task10