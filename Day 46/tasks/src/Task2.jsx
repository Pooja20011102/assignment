import React, { useEffect } from 'react'

function Task2() {
    useEffect(() => {
        console.log("Component Mounted")
        return() => {
            console.log("Component Unmounted")
        }
    },[])
  return (
    <div>
        <p>Check the console for message</p>
    </div>
  )
}

export default Task2