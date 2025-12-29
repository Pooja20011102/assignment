import React from 'react'

function Task7() {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
    
    <img
       src="https://i.pravatar.cc/150?id=3"

      className="w-24 h-24 rounded-full mx-auto"
      alt="profile"
    />

    <h2 className="text-xl font-semibold mt-4">Pooja J</h2>
    <p className="text-gray-500 text-sm">Frontend Developer</p>

    <div className="flex justify-center gap-4 mt-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Follow
      </button>
      <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
        Message
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Task7