import React, { useEffect, useState } from 'react'

function Task7() {
  
  const [followers , setFollowers] = useState([])
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
   async function fetchFollwers(){
    try{
      const response = await fetch("https://api.github.com/users/arun-cloud-dev/followers");
      const data = await response.json()
      setFollowers(data)
    }
    catch(e){
      console.log(error)
    }
    finally{
      setLoading(false)
    }
   }
   fetchFollwers();
  },[]);

  if (loading){
    return <p>Loading Followers</p>
  }

  return (
    <div>
      <h2>Followers List</h2>
      {followers.length === 0 && <p>No followers found</p>}
       {followers.map(f => (
        <div 
          key={f.id} 
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #db8181ff",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <img 
            src={f.avatar_url} 
            alt={f.login} 
            width="50" 
            style={{ borderRadius: "50%" }}
          />
          <div>
            <strong>{f.login}</strong>
            <p><a href={f.html_url} target="_blank">View Profile</a></p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Task7