import React, { useEffect, useState } from 'react'

function Task6() {
  const [time , setTime ] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(()=>{
      setTime(new Date())
    },1000);

    return () => {
      clearInterval(interval)
    }
  },[])

  function getTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridian = hours>=12 ?  "PM" : "AM";
    hours = hours % 12 || 12;

    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${meridian}`
  }

  function padZero(num){
    return (num < 10 ? "0" : "") + num;
  }

  return (
    <div>
        <p>{getTime()}</p>
    </div>
  )
}

export default Task6