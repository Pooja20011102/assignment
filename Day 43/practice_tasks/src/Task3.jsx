import React, { useState } from 'react'

function Task3() {
    const [switch1 , setSwitch] = useState("ON");
    let switch2 = (switch1==="ON")?"Turn OFF":"Turn ON"
    function changeswitch(e){
        if (switch1 == "ON"){
             setSwitch("OFF")
        }
        else{
            setSwitch("ON")
        }
       
    }
  return (
    <div>
        <p>{switch1}</p>
        <button onClick={changeswitch}>{switch2}</button>
    </div>
  )
}

export default Task3