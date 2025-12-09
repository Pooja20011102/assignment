import React, { useState, useEffect } from 'react'



function Task7() {
    const [color,setColor] = useState("white")
    const [textColor, setTextColor] = useState("black");

    function changebackground(){
        setColor(color === "white" ? "black" : "white")
         setTextColor(color === "white" ? "white" : "black")
    }
    useEffect(() => {
    document.body.style.backgroundColor = color;
    document.body.style.color = textColor
  }, [color, textColor]);
  

  return (
    <div>
        <button onClick={changebackground}>Change Background Color</button>
    </div>
  )
}

export default Task7