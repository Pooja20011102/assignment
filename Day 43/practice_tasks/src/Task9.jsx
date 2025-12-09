import React, { useState } from 'react'

function Task9() {
    const [value,setValue] = useState("")
    function getvalue(e){
        setValue(e.target.value)
    }
  return (
    <div>
        <select name="Favourite Fruits" id="Fruits" onChange={getvalue}>
            <option value="apple">apple</option>
            <option value="mango">mango</option>
            <option value="banana">banana</option>
            <option value="orange">orange</option>
        </select>
        <p>Fruit : {value}</p>
    </div>
  )
}

export default Task9