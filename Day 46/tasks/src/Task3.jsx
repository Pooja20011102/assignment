import React, { useEffect, useState } from 'react'

function Task3() {
    const [count , setCount] = useState(0)
    function handleCount(){
        setCount(c => c + 1)
    }
    useEffect(()=>{
        console.log("count" , count )
    },[count])
  return (
    <div>
        <button onClick={handleCount}>Count is displayed in console</button>
    </div>
  )
}

export default Task3