import React from 'react'

const Blog = () => {
  return (
    <section className="px-6 bg-[#ecf0f1] pb-4">
      <div>
        <h2 className="text-4xl font-bold text-center text-black mb-4 pt-8 tracking-tight">
          Latest Blog Posts
        </h2>

        <p className="text-black text-center mb-12 max-w-2xl mx-auto">
          Stay updated with our latest dental care tips and news.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10 mb-20">

          {/* Card 1 */}
          <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <img
              src="src/assets/images/caroline-lm-8BkF0sTC6Uo-unsplash.jpg"
              alt="Dent1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Top 5 Tips for a Brighter Smile
              </h3>
              <p className="text-gray-600 mb-3">
                Learn how to maintain a healthy and bright smile with these simple tips.
              </p>
              <a href="#" className="block text-blue-500 hover:text-blue-700 mt-2">
                Read Now
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <img
              src="src/assets/images/jonathan-borba-v_2FRXEba94-unsplash.jpg"
              alt="Dent1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Benefits of Regular Checkups
              </h3>
              <p className="text-gray-600">
                Discover why regular dentist visits are crucial for oral health.
              </p>
              <a href="#" className="block text-blue-500 hover:text-blue-700 mt-2">
                Read Now
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <img
              src="src/assets/images/quang-tri-nguyen-VckdJzo7ig0-unsplash.jpg"
              alt="Dent1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Understanding Dental Implants
              </h3>
              <p className="text-gray-600">
                Everything you need to know about dental implants.
              </p>
              <a href="#" className="block text-blue-500 hover:text-blue-700 mt-2">
                Read Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Blog