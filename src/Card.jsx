// src/App.jsx
import React from 'react'
import pic1 from './assets/First.jpg'
import pic2 from './assets/South Africa.jpg'
import pic3 from './assets/kente.jpg'

const App = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-center px-4">
        
        {/* Welcome */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
            WELCOME TO THE GALLERY
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto drop-shadow-md">
            We provide the best services in the industry with top-notch quality and amazing arts.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition duration-300">
            Get Started
          </button>
        </div>

        {/* Cards */}
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <img src={pic1} alt="First" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">MOTHER AFRICA</h3>
              <p className="text-sm text-gray-600">
                This artwork portrays the deep connection between Africa and its people. 
                It features a strong, graceful woman whose face blends into the African continent.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <img src={pic2} alt="South Africa" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">THE SPIRIT OF SOUTH AFRICA</h3>
              <p className="text-sm text-gray-600">
                This artwork portrays the beauty and pride of South African culture. 
                It features a woman adorned in colorful traditional beadwork, symbolizing strength, identity, and heritage.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <img src={pic3} alt="Ghana Kente" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">GHANA KENTE</h3>
              <p className="text-sm text-gray-600">
                This artwork celebrates Ghanaian culture and heritage. 
                It features three women dressed in vibrant Kente cloth and adorned with traditional gold jewelry, symbolizing royalty and elegance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
