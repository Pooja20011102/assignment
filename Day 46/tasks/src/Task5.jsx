import React, { useEffect, useState } from 'react'

function Task5() {
    
    const [title,setTitle] = useState("")
    function handleinput(e){
        setTitle(e.target.value)
    }
    function changetitle(){
        document.title = title
    }

    useEffect(() => {changetitle},[title])
  return (
    <div>
        <input type="text" name="title" placeholder='title' onChange={handleinput} />
        <button onClick={changetitle}>Click here to change the page title </button>
    </div>
  )
}

export default Task5