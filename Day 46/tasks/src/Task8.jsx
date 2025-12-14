import React, { useEffect, useState } from 'react'

function Task8() {
  const [followers, setFollowers] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    async function getFollowers() {
      try {
        const response = await fetch(
          'https://api.github.com/users/arun-cloud-dev/followers'
        )
        const data = await response.json()
        setFollowers(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getFollowers()
  }, [])

  function findName() {
    setSearched(true)
    const result = followers.filter(f =>
      f.login.toLowerCase().includes(name.toLowerCase())
    )
    setFiltered(result)
  }

  if (loading) return <p>Loading Followers...</p>

  return (
    <div>
      <input
        type="text"
        placeholder="Search follower"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={findName}>Search</button>

      {searched && filtered.length === 0 && <p>No followers found</p>}

      {searched &&
        filtered.map(f => (
          <div key={f.id}>
            <img src={f.avatar_url} width="40" />
            <strong>{f.login}</strong>
          </div>
        ))}
    </div>
  )
}

export default Task8
