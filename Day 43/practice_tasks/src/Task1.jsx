import React, { useState } from 'react'

function Task1() {
    const [count , setCount] = useState(0);
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
  return (
    <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
        <p>{count}</p>
    </div>
  )
}

export default Task1