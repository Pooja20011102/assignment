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
        <label htmlFor="ename">Name&nbsp;</label>
        <input type="text" onChange={handleinput} name="ename" id="pname"/><br /><br />
        <button onClick={addtolist}>Click me</button>
    </div>
  )
}

export default Task1