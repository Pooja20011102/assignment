import React from 'react'
import { useState } from 'react'

function Task4() {
    const [isEven , setEven] = useState("ODD")
    const [n,setN]  =  useState(0)
    function handleChange(e){
        const val = Number(e.target.value);
        setN(val)
        if (val%2 === 0){
            setEven("EVEN")
        }
        else{
            setEven("ODD")
        }
    }
    return (
      <div>
        <input type="number" value={n} onChange={handleChange}/>
        <p>{isEven}</p>
       
    </div>
  )
}

export default Task4