import React, { useState } from 'react'

function Task5() {
    const [color,setColor] = useState("white")
    let textcolor = (color === "white") ? "black" : "white"
    function changecolor(){
      setColor(color === "white" ? "black" : "white");
    }
  return (
    <div>
        <button onClick={changecolor} style={{backgroundColor : color, color : textcolor}}>Click me</button>
    </div>
  )
}

export default Task5