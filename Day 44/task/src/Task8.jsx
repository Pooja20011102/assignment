import React, { useState } from 'react'

function Task8() {
    const [newdict,setEle] = useState({name : "" , age : ""})
    const [newvalue,setValue] = useState({})
    function handleChange(){
      setEle({...newdict,...newvalue})
      setValue({})
    }
    function handleinput(e){
      const {name,value} = e.target 
      setValue(prev => ({...prev,[name] : value}))
    }
  return (
    <div>
      <input type="text" name="name" onChange={handleinput} />
      <input type="number" name="age" onChange={handleinput}/>
      <button onClick={handleChange}>Click to update</button>
      <p>Name : {newdict.name} </p>
      <p>Age : {newdict.age}</p>
    </div>
  )
}

export default Task8