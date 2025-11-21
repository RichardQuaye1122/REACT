import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="relative h-screen overflow-hidden">
        <img src="src/assets/images/vivek-sZZoXZsVeJg-unsplash.jpg" alt="Background" className="absolute inset-0 w-full object-cover z-[-1]" />
        <div className="flex flex-col items-start justify-center h-full w-full px-10 md:px-20 gap-4 text-left relative z-10">
        <h1 className="text-white text-2xl hover:text-blue-700 transition-all duration-300 cursor-pointer">MEN COLLECTION 2025</h1>
        <p className="text-5xl font-bold text-white hover:text-blue-700 transition-all duration-300 cursor-pointer">NEW ARRIVALS</p>
        <button className="bg-blue-600 text-white font-semibold rounded-lg px-10 py-2 hover:bg-blue-700 transition-all duration-300 cursor-pointer">
        SHOP NOW
        </button>
        </div>
      </section>
      
    </div>
  )
}

export default Hero