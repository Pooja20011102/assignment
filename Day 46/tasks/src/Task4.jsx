import React, { useEffect, useState } from 'react'

function Task4() {
    const [name , setName] = useState("")
    function handlename(e){
        setName(e.target.value)
    }

    function handleClick(){
        console.log("Name : " , name )
    }

    useEffect(() => {handleClick},[name])
  return (
    <div>
        <label htmlFor="name">Enter your Name </label>
        <input type="text" name="name" id="name" onChange={handlename} />
        <button onClick={handleClick}>Submit and Check console</button>
    </div>
  )
}

export default Task4