import React, { useState } from 'react'

function Task10() {
    const [attendace,setAtt] = useState([])
    const [newvalue , setValue] = useState({})

    function addtolist(){
        setAtt(prev => [...prev,newvalue])
        setValue({})
    }

    function handleinput(e){
        const {name , value} = e.target 
        setValue(prev => ({...prev,[name] : value}))
    }

  return (
    <div>
        <input type="text" name="name" placeholder="Enter you Name" onChange={handleinput}/>
        <select name="status" id="attendance" onChange={handleinput}>
            <option value="">--Select Status--</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
        </select>
        <button onClick={addtolist}>Click to update attendance</button>
        <ol>
            {attendace.map((t,index) => <li key={index}>{t.name} - {t.status}</li>)}
        </ol>
      
    </div>
  )
}

export default Task10