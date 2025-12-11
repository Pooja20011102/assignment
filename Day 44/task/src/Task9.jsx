import React, { useState } from 'react'

function Task9() {
    const [value,setValue] = useState(0)
  return (
    <div>
        <button onClick={() => {setValue(c => c+1)}}>Click me</button>
        <p>Value : {value}</p>
        {value === 0 ? <p style={{color:"red"}}>Notification : value is zero</p>:
        <p>Value updated</p>}
    </div>
  )
}

export default Task9