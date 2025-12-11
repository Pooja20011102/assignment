import React, { useState } from 'react'

function Task3() {
     const [city,setCity] = useState([])
     function addCity(){
        const cityInput = document.getElementById("cityInput").value;
        setCity([...city,cityInput])
     }
  return (
   
    <div>
        <input type="text" id="cityInput"/>
        <button onClick={addCity}>Add City</button>
        <ol>
            {city.map(cities => <li>{cities}</li>)}
        </ol>
    </div>
  )
}

export default Task3