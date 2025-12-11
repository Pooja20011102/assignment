import React, { useState } from 'react'

function Task2() {
    const [isPreimium,setPremium] = useState(false)
  return (
    <div>
        <button onClick={() => {setPremium(!isPreimium)}}>{isPreimium ? "Premium User " : "Buy Premium"}</button>
        {isPreimium && <p>Congrats, You are our Premium User</p>}
    </div>
  )
}

export default Task2