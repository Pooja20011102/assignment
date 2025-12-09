
import React, { useState } from 'react'
function Task2() {
  const [Name, setName] = useState("")
  function changename(e){
    setName(e.target.value)
  }
  return (
    <div>
        <input type="text" value={Name} onChange={changename} />
        <p>Name  :{Name}</p>
    </div>
  )
}

export default Task2