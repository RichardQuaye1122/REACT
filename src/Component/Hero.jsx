import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden">
        <img src="src/assets/images/quang-tri-nguyen-VckdJzo7ig0-unsplash.jpg" alt="Dental Clinic" 
        className="w-full h-full object-cover"/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left max-w-2xl px-4">
            <h1 className="text-5xl font-extrabold text-white mb-2">Modern Dentistry in a Calm</h1>
            <p className="text-5xl font-extrabold text-white mb-4">Environment</p>
            <p className="text-white text-lg mb-6">
                A small river named Duden flows by their place, providing a serene backdrop for your dental care.
            </p>
            <button className="bg-[#3535e4] hover:bg-[#2a2ac4] text-white rounded-full px-8 py-3 text-lg transition-colors">
                Make an Appointment
            </button>
        </div>
    </div>
    </>
  )
}

export default Hero