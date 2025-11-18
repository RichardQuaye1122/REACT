import React from 'react';

const Services = () => {
  return (
    <section>
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Services Keep You Smiling
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Comprehensive dental services designed to maintain and enhance your oral health with the latest technology.
        </p>
      </section>

      <div className="flex flex-row justify-center gap-6 px-4 mb-20">
        {/* Emergency cases */}
        <div>
          <div className="w-[333px] h-120 p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-2xl">
            <div className="mb-5">
              <svg
                width="75px"
                height="75px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="#4094ff"
                stroke="#4094ff"
                strokeWidth="0.00048"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.288"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="invisible_box" data-name="invisible box">
                      <rect width="48" height="48" fill="none"></rect>
                    </g>
                    <g id="Layer_4" data-name="Layer 4">
                      <path d="M36.8,11.1A2.8,2.8,0,0,0,34.5,10H32V8a2.9,2.9,0,0,0-3-3H5A2.9,2.9,0,0,0,2,8V35a3,3,0,0,0,3,3H7.3a7,7,0,0,0,13.4,0h6.6a7,7,0,0,0,13.4,0H43a3,3,0,0,0,3-3V21.2ZM14,39a3,3,0,0,1-3-3,3,3,0,0,1,6,0A3,3,0,0,1,14,39Zm8-17H19v3a2,2,0,0,1-4,0V22H12a2,2,0,0,1,0-4h3V15a2,2,0,0,1,4,0v3h3a2,2,0,0,1,0,4ZM34,39a3,3,0,0,1-3-3,3,3,0,0,1,6,0A3,3,0,0,1,34,39ZM32,21V14h2l6.4,7Z"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Emergency Cases</h3>
              <p className="text-gray-600 mb-3">Swift, compassionate care for dental emergencies.</p>
              <p className="text-blue-800 font-bold hover:underline">+ (123) 456 7890</p>
            </div>
          </div>
        </div>

        {/* Opening Hours Card */}
        <div>
          <div className="w-[333px] h-120 p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-2xl">
            <div className="mb-5">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7 3V8.41421L10.2929 11.7071L11.7071 10.2929L9 7.58579V3H7Z"
                  fill="#5199e6"
                ></path>
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Opening Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Mon - Fri: 8:00 - 19:00</li>
                <li>Saturday: 10:00 - 17:00</li>
                <li>Sunday: 10:00 - 16:00</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Book Appointment */}
        <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500">
          <svg
            fill="#95beea"
            width="64px"
            height="64px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#95beea"
            strokeWidth="0.00512"
          >
            <path d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"></path>
          </svg>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Book Appointment</h3>
          <form className="space-y-3">
            <select className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
              <option value="">Select Department</option>
              <option value="general">General Dentistry</option>
              <option value="orthodontics">Orthodontics</option>
              <option value="implants">Dental Implants</option>
            </select>

            <input type="text" placeholder="Your Name" className="w-full p-2 rounded-lg border border-gray-100 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Email" className="w-full p-2 rounded-lg border border-gray-100 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="tel" placeholder="Phone" className="w-full p-2 rounded-lg border border-gray-100 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <div className="flex gap-4">
              <input type="date" className="w-[150px] p-2 rounded-lg border border-gray-200 bg-gray-100" />
              <input type="time" className="w-[120px] p-2 rounded-lg border border-gray-200 bg-gray-100" />
            </div>
            <button className="bg-[#3535e4] hover:bg-[#2a2ac4] text-white rounded-lg px-10 py-4 text-lg transition-colors w-full">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Services
