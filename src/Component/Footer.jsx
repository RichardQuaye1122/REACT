import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#464545] text-white p-10 grid gap-8 md:grid-cols-4">
        <div className="text-center">
          <p className="text-3xl font-bold">Categories</p>
          <p className="pt-5">Women</p>
          <p>Men</p>
          <p>Shoes</p>
          <p>Watches</p>
        </div>

        <div className="text-center">
          <p className="text-3xl font-bold">Help</p>
          <p className="pt-5">Track Order</p>
          <p>Returns</p>
          <p>Shipping</p>
          <p>FAQs</p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold">GET IN TOUCH</p>
          <p className="pt-5">Any questions? Let us know at:</p>
          <p>379 Hudson St, New York, NY 10018</p>
          <p>Call: (+1) 96 716 6879</p>
          <div className="space-x-3 mt-3 text-gray-300">
            <i className="fab fa-facebook-f fa-lg"></i>
            <i className="fab fa-twitter fa-lg"></i>
            <i className="fab fa-instagram fa-lg"></i>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold">NEWSLETTER</p>
          <input type="email" placeholder="email@example.com" className="mt-4 bg-transparent border-b-2 border-gray-300 w-[16rem] p-2 text-white placeholder-gray-400" />
          <button className="mt-4 bg-blue-700 text-white px-5 py-2 rounded-2xl hover:bg-blue-800 transition-all">
            SUBSCRIBE
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Footer