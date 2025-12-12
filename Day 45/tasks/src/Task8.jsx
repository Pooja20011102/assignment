import React,{useState} from 'react'

function Task8() {
  const [dict,setDict] = useState({name : "" , age : 0, email : ""})
  function handleinput(e){
      const {name , value} = e.target 
      setDict({...dict,[name] : value})
    }
  
  return (
    <div>
       <input type="text" name="name"  onChange={handleinput} placeholder='Enter your Name'/><br /><br />
        <input type="Number" name="age" onChange={handleinput} placeholder='Enter your age'/><br /><br />
        <input type="email" name="email" onChange={handleinput} placeholder='Enter your email'/><br /><br />
      <h3>Live Data</h3>
    <p>Name: {dict.name}</p>
    <p>Age: {dict.age}</p>
    <p>Email: {dict.email}</p>
    </div>
  )
}

export default Task8