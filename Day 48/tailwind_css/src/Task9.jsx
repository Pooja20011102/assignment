import React from 'react'

function Task9() {
  return (
    <div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="grid gap-6 md:grid-cols-3 p-4">


    <div className="bg-white p-6 rounded-xl shadow text-center">
      <h3 className="text-xl font-semibold">Basic</h3>
      <p className="text-3xl font-bold my-4">₹0</p>
      <ul className="text-gray-600 space-y-2">
        <li>✔ 1 Project</li>
        <li>✔ Email Support</li>
        <li>✖ Analytics</li>
      </ul>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
        Choose Plan
      </button>
    </div>

    <div className="bg-blue-600 text-white p-6 rounded-xl shadow text-center scale-105">
      <h3 className="text-xl font-semibold">Pro</h3>
      <p className="text-3xl font-bold my-4">₹499</p>
      <ul className="space-y-2">
        <li>✔ Unlimited Projects</li>
        <li>✔ Priority Support</li>
        <li>✔ Analytics</li>
      </ul>
      <button className="mt-4 w-full bg-white text-blue-600 py-2 rounded-lg">
        Choose Plan
      </button>
    </div>

    <div className="bg-white p-6 rounded-xl shadow text-center">
      <h3 className="text-xl font-semibold">Enterprise</h3>
      <p className="text-3xl font-bold my-4">₹999</p>
      <ul className="text-gray-600 space-y-2">
        <li>✔ Dedicated Support</li>
        <li>✔ Custom Features</li>
        <li>✔ Analytics</li>
      </ul>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
        Choose Plan
      </button>
    </div>

  </div>
</div>

    </div>
  )
}

export default Task9