import React from 'react'

function Task8() {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <form className="bg-white p-6 rounded-xl shadow-lg w-96">
    
    <h2 className="text-2xl font-semibold text-center mb-4">
      Login
    </h2>

    <input
      type="email"
      placeholder="Email"
      className="w-full border p-2 rounded mb-3 focus:outline-blue-500"
    />

    <input
      type="password"
      placeholder="Password"
      className="w-full border p-2 rounded mb-4 focus:outline-blue-500"
    />

    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
      Sign In
    </button>

    <p className="text-sm text-center text-gray-500 mt-4">
      Don’t have an account? <span className="text-blue-600 cursor-pointer">Sign up</span>
    </p>
  </form>
</div>

    </div>
  )
}

export default Task8