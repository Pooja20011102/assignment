import React, { useState } from 'react'

function Task4() {
  const [country,setCountry] = useState("")
  function handleinput(e){
    setCountry(e.target.value)
  }
  return (
    <div>
      <select name="country" id="country" onChange={handleinput}>
        <option value="">---select a country ---</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Uk">UK</option>
        <option value="Canada">Canada</option>
      </select>
      <p>Country : {country}</p>
    </div>
  )
}

export default Task4