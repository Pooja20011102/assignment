import React, { useState } from 'react'

function Task2() {
  const [name,setCaps] = useState("")
  const [res,setRes] = useState("")
  function handleinput(e){
    setCaps(e.target.value.toUpperCase())
  }
  return (
    <div>
       <label htmlFor="fname">Name&nbsp;</label>
        <input type="text" onChange={handleinput} name="fname" id="gname"/><br /><br />
        <button onClick={() => {setRes(name)}}>Click me</button>
        <p>name : {res}</p>
    </div>
  )
}

export default Task2