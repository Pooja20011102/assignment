import React, { useState } from 'react'

function Task4() {
    const [car,setCar] = useState({name : " ", model :"", color : " "})
    function handleDict(e){
        const {name , value} = e.target
        setCar({...car,[name]:value})
    }

  return (
    <div>
        <input type="text" name="name" onChange={handleDict}/>
        <input type="text" name="model" onChange={handleDict}/>
        <input type="text" name="color" onChange={handleDict}/>
        <p>Car Details 
             name : {car.name} &nbsp;
             model : {car.model} &nbsp;
             color : {car.color} &nbsp;     
        </p>
    </div>
  )
}

export default Task4