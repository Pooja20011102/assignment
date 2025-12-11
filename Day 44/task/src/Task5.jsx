import React, { useState } from 'react'

function Task5() {
    const [data,setData] = useState([])
    function addtoList(){
        const newdata = document.getElementById("inputele").value
        setData([...data,newdata])

    }
  return (
    <div>
        <input type="text"  id="inputele"/>
        <button onClick={addtoList}>Add</button>
        <ol>
            {(data.length === 0) ? <p>No Data Available</p> : data.map(ele => <li>{ele}</li>)}
        </ol>
    </div>
  )
}

export default Task5