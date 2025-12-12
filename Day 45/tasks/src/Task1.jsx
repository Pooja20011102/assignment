import React,{useState} from 'react'

function Task1() {
    const [name,setName] = useState("")
    
    function handleinput(e){
        setName(e.target.value)
     }

    function addtolist(){
        alert("Hello " + name)
    }
  return (
    <div>
        <input type="text" onChange={handleinput}/>
        <button onClick={addtolist}>Click me</button>
    </div>
  )
}

export default Task1