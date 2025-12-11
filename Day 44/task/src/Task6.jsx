import React, { useState } from 'react'

function Task6() {
    const [todo,setTodo] = useState([])
    const [task,setTask] = useState("")
    function addtoTodo(){
        if (task.trim() === "") return;  
        setTodo([...todo,task])
        setTask("")
    }
  return (
    <div>
        <h3>Todo List</h3>
        <input type="text" id="inputele" value={task} onChange={(e) => {setTask(e.target.value)}}/>
        <button onClick={addtoTodo}>Add to Todo List</button>
        <ol>
             {todo.map((ele,index) => <li key={index}>{ele}</li>)}
        </ol>
       
    </div>
  )
}

export default Task6