import React from 'react'

const Category = () => {
  return (
    <div>
        <section className="p-10 flex flex-col justify-center items-center min-h-screen bg-gray-300">
            
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center hover:text-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer">Categories</h1>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl">
                <div className="border w-full h-[20rem] p-4 flex flex-col hover:text-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <h2 className="text-3xl font-bold">Women</h2>
                    <p className="text-xl">Spring 2018</p>
                    <div className="mt-auto flex justify-center">
                        <img src="src/assets/images/Woman.png" alt="Woman Clothing" className="w-full max-w-[16rem] object-contain" />
                    </div>
                </div>

                <div className="border w-full h-[20rem] p-4 flex flex-col hover:text-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <h2 className="text-3xl font-bold">Men</h2>
                    <p className="text-xl">Spring 2018</p>
                    <div className="mt-auto flex justify-center">
                        <img src="src/assets/images/Male.png" alt="Men Clothing" className="w-full max-w-[16rem] object-contain" />
                    </div>
                </div>

                <div className="border w-full h-[20rem] p-4 flex flex-col hover:text-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <h2 className="text-3xl font-bold">Accessories</h2>
                    <p className="text-xl">Spring 2018</p>
                    <div className="mt-auto flex justify-center">
                        <img src="src/assets/images/Cap.png" alt="Cap" className="w-full max-w-[16rem] object-contain" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Category