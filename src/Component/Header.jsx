import React from 'react'

const Header = () => {
  return (
    <>
      <header className="bg-blue-900 p-4 shadow-md hover:bg-blue-900/40 hover:backdrop-blur-md fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between max-w-7xl mx-auto">

          {/* <!-- Navigation --> */}
          <nav className="text-2xl text-white font-bold">DENTACARE</nav>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-white hover:text-blue-200">Home</a>
            <a href="#" className="text-white hover:text-blue-200">About</a>
            <a href="#" className="text-white hover:text-blue-200">Service</a>
            <a href="#" className="text-white hover:text-blue-200">Doctors</a>
            <a href="#" className="text-white hover:text-blue-200">Blog</a>
            <a href="#" className="text-white hover:text-blue-200">Contact</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2">
              Book Appointment
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header