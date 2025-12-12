import React, { useState } from 'react'

function Task6() {
  const [email,setEmail] = useState("")
  const [pwd,setPwd] = useState("")
  
  function handleinput(e){
    const {name , value} = e.target 
    if (name === "email"){
      setEmail(value)
    }
    if (name === "pwd"){
      setPwd(value)
    }
  }

  function handleform(e){
    e.preventDefault()
    alert(`Email : ${email} , Password : ${pwd}`)
  }

  return (
    <div>
      <form onSubmit={handleform}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleinput}/>
        <br /><br />
        <label htmlFor="pwd">Password</label>
        <input type="password" name="pwd" onChange={handleinput} />
        <br /> <br />
        <button>Submit Form</button>
      </form>
    </div>
  )
}

export default Task6