import React from 'react'

const Header = () => {
  return (
    <div>
        <header>
        <nav className="bg-white flex px-4 py-10 items-center justify-between shadow-2xl cursor-pointer">
        <img src="src/assets/images/coza.webp" alt="Logo" className="lg:ml-30" />

        <div className="space-x-5 font-medium hidden lg:flex">
            <a href="cozastore.html" className="text-blue-500">Home</a>
            <a href="cozastore.html" class="hover:text-blue-500 transition-all duration-300">Shop</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300">Features</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300">Blog</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300">About</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300">Contact</a>
        </div>

        <div className="text-black space-x-10 lg:ml-30">
            <i className="fa-solid fa-magnifying-glass hover:text-blue-500 transition-all duration-300"></i>
            <i className="fa-solid fa-cart-shopping hover:text-blue-500 transition-all duration-300"></i>
            <i className="fa-regular fa-heart hover:text-blue-500 transition-all duration-300"></i>
        </div>
        </nav>
        </header>
    </div>
  )
}

export default Header