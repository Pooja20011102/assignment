import React, { useState } from 'react'

function Task3() {
  const [isChecked,setChecked] = useState(false)

  function handleinput(e){
    const a = e.target.checked  
    if (a){
      setChecked(true)
    }
    else{
      setChecked(false)
    }
  }

  return (
    <div>
      <label htmlFor="Terms and conditions">Agree to Terms and conditions</label>
      <input type="checkbox" onChange={handleinput} id="Terms and conditions" name="Terms and conditions"/>

      
      {isChecked ? <p style={{color:"green"}}>Agreed to our terms and conditions</p>:
      <p style={{color : "red"}}>Please agree to our terms and conditions</p>}
    </div>
  )
}

export default Task3