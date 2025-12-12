import React, { useState } from 'react'

function Task7() {
  const [dict,setDict] = useState({name : "" , age : 0 , phone : 0 , email : ""})
  function handleinput(e){
    const {name,value} = e.target 
    setDict({...dict,[name] : value})
  }

  function handleform(e){
    e.preventDefault()
    alert(`Name : ${dict.name} 
    Age : ${dict.age}
    Phone No : ${dict.phone}
    Email : ${dict.phone}`
          )
  }

  return (
    <div>
      <form onSubmit={handleform}>
        <input type="text" name="name" id="name" placeholder='Enter your Name' onChange={handleinput}/>
        <br /><br />
        <input type="Number" name="age" id="age" placeholder='Enter your age'onChange={handleinput} />
        <br /><br />
        <input type="Number" name="phone" id="phone" placeholder='Enter your Phone Number' onChange={handleinput}/>
        <br /><br />
        <input type="email" name="email" id="email" placeholder='Enter your email' onChange={handleinput}/>
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Task7