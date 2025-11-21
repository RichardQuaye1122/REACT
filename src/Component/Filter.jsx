import React from 'react'

const Filter = () => {
  return (
    <div>
        <section className="max-w-screen-xl mx-auto text-center mt-15">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center hover:text-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer">Product Overview</h1>
            <div className="px-10 flex flex-wrap items-center justify-between gap-6">

                <div className="flex flex-wrap items-center gap-6">
                    <a href="#" className="text-black underline hover:text-blue-500 transition-all duration-300">All Products</a>
                    <a href="#" className="text-gray-400 hover:text-black transition-all duration-300 underline">Women</a>
                    <a href="#" className="text-gray-400 hover:text-black transition-all duration-300 underline">Men</a>
                    <a href="#" className="text-gray-400 hover:text-black transition-all duration-300 underline">Bag</a>
                    <a href="#" className="text-gray-400 hover:text-black transition-all duration-300 underline">Shoes</a>
                    <a href="#" className="text-gray-400 hover:text-black transition-all duration-300 underline">Watches</a>
                </div>

                <div className="flex gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 border border-gray-500 text-lg cursor-pointer">
                        <i className="fa-solid fa-filter"></i> <span>Filter</span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 border border-gray-500 text-lg cursor-pointer">
                        <i className="fa-solid fa-magnifying-glass"></i> <span>Search</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Filter