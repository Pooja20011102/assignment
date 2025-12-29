import React from 'react'

function Task6() {
  return (
    <div>
        <nav className="bg-white shadow-md">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      
   
      <div className="text-xl font-bold text-blue-600">
        MyApp
      </div>


      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Services</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

   
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Login
      </button>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Task6