import { useState } from "react"

function Task1(){
    const [isLoggedIn, setIslogged] = useState(false)
 
    return (
        <>
          <h3>{isLoggedIn ? "Logged In" : "Guest"}</h3>
          <button onClick={() => {setIslogged(!isLoggedIn)}}>{isLoggedIn ? "Log Out" : "Log In"}</button>
        </>
    )
}

export default Task1