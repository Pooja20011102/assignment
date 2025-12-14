import React, { useEffect, useState } from 'react'


function Task10() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.body.className =
      theme === "light" ? "light-theme" : "dark-theme"
  }, [theme])

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Task10
