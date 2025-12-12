import React, { useState } from 'react'

function Task9() {
  const [dict,setDict] = useState({name : "" , age : 0, email : ""})
  function handleinput(e){
    const {name , value} = e.target 
    setDict({...dict,[name] : value})
  }

  return (
    <div>
      <form>
        <input type="text" name="name"  onChange={handleinput} placeholder='Enter your Name'/><br /><br />
        <input type="Number" name="age" onChange={handleinput} placeholder='Enter your age'/><br /><br />
        <input type="email" name="email" onChange={handleinput} placeholder='Enter your email'/><br /><br />
        <button disabled={dict.name===""|| dict.age === 0 || dict.email === ""} type="submit">Submit</button>
      </form>
    
    </div>
  )
}

export default Task9