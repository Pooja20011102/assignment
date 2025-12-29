import React from 'react'

function Task10() {
  return (
    <div>
        <div className="min-h-screen grid grid-cols-12 bg-gray-100">


  <aside className="col-span-12 md:col-span-3 lg:col-span-2 bg-white p-4 shadow">
    <h2 className="font-bold text-xl mb-4">Dashboard</h2>
    <ul className="space-y-3 text-gray-600">
      <li className="hover:text-blue-600 cursor-pointer">Overview</li>
      <li className="hover:text-blue-600 cursor-pointer">Users</li>
      <li className="hover:text-blue-600 cursor-pointer">Reports</li>
      <li className="hover:text-blue-600 cursor-pointer">Settings</li>
    </ul>
  </aside>


  <main className="col-span-12 md:col-span-9 lg:col-span-10 p-6">
    <h1 className="text-2xl font-semibold mb-4">Welcome Back 👋</h1>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white p-4 rounded-xl shadow">Card 1</div>
      <div className="bg-white p-4 rounded-xl shadow">Card 2</div>
      <div className="bg-white p-4 rounded-xl shadow">Card 3</div>
    </div>
  </main>

</div>

    </div>
  )
}

export default Task10