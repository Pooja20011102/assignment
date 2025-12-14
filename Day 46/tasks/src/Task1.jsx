
import { useState , useEffect } from 'react';

function Task1() {
    const [count , setCount] = useState(0);
    function clickbutton(){
        setCount(c => c+1);
    }

    useEffect(() => {
        console.log("RENDERED")
    },[])
  return (
    <div>
        <button onClick={clickbutton}>You clicked me {count} times</button>
    </div>
  )
}

export default Task1