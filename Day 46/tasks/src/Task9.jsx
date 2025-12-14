import React ,{useState, useEffect, use} from 'react'

function Task9() {
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(text.length)
  }, [text])

  function handleinput(e) {
    setText(e.target.value)
  }



  return (
    <div>
      <input type="text" name='text' onChange={handleinput}/>

      <p>Character Count: {count}</p>
    </div>
  )
}

export default Task9