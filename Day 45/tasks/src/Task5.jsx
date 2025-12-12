import React, { useState } from 'react'

function Task5() {
  const [pwd,setPwd] = useState("")
  const [repwd,setRepwd] = useState("")

  function handleinput(e){
    const {name,value} = e.target 

    if (name === "pwd"){
      setPwd(value)
    }

    if (name === "repwd"){
      setRepwd(value)
    }
  }


  return (
    <div>
      <input type="password"  name="pwd" placeholder="Enter the Password" onChange={handleinput}/>
      <input type="password"  name="repwd" placeholder="Re-enter the Password" onChange={handleinput} />
      <button disabled={pwd!==repwd || pwd === ""}>Submit</button>
      {(pwd!==repwd || pwd === "") ? <p style={{color : "red"}}>Passwords do not match/Password is empty</p>
      :
      <p style={{color : "green"}}>Password matched</p>}
    </div>
  )
}

export default Task5