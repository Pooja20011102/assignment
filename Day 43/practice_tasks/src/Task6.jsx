import React from 'react'
import { useState } from 'react'

function Task6() {
    const [email,setEmail] = useState("")
    const [pwd,setpwd] = useState("")
    function getlivename(e){
        setEmail(e.target.value)
    }
    function getlivepwd(e){
        setpwd(e.target.value)
    }
  return (
    <div>
        <p>Enter you Email </p>
        <input type="email" onChange={getlivename} />
        <p>Email : {email}</p>
        <p>Enter your password</p>
        <input type="password" onChange={getlivepwd} />
        <p>Password : {pwd}</p>
    </div>
  )
}

export default Task6
