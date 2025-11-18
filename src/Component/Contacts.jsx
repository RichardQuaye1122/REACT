import React from 'react';

const Contacts = () => {
  return (
    <section className="py-20">
      <div className="w-[1000px] mx-auto px-6">
        <h2 className="text-4xl text-black text-center mb-4 pt-12 tracking-tight font-bold">
          Get in Touch
        </h2>
        <p className="text-center">
          A small river named Duden flows by, creating a serene setting for your inquiries.
        </p>

        {/* FLEX WRAPPER */}
        <div className="flex gap-6 mt-10">

          {/* FORM */}
          <div className="rounded-2xl shadow-2xl border-t-4 border-indigo-600 p-8 w-[500px]">
            <form>
              <select className="w-full p-4 mb-5 rounded-lg bg-gray-50 border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                <option>Select Inquiry Type</option>
                <option>Appointment</option>
                <option>Billing</option>
                <option>General Inquiry</option>
              </select>

              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 mb-5 rounded-lg bg-gray-50 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-5 rounded-lg bg-gray-50 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <textarea
                placeholder="Message"
                className="w-full p-3 mb-5 h-32 rounded-lg bg-gray-50 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>

              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-full h-[4rem] transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO BOX */}
          <div className="text-white bg-[#11117e] rounded-2xl shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl p-10 h-[17rem] w-[30rem]">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>

            <p className="mb-3 flex items-center">
              <i className="fas fa-map-marker-alt mr-3 text-blue-300"></i>
              123 Duden Road, Dental City, DC 12345
            </p>

            <p className="mb-3 flex items-center">
              <i className="fas fa-phone-alt mr-3 text-blue-300"></i>
              <a
                href="tel:+1234567890"
                className="hover:text-blue-300 transition-colors"
              >
                + (123) 456 7890
              </a>
            </p>

            <p className="mb-3 flex items-center">
              <i className="fas fa-envelope mr-3 text-blue-300"></i>
              <a
                href="mailto:info@dentacare.com"
                className="hover:text-blue-300 transition-colors"
              >
                info@dentacare.com
              </a>
            </p>

            <p className="mb-3 flex items-center">
              <i className="fas fa-clock mr-3 text-blue-300"></i>
              Mon–Fri 9 AM – 5 PM
            </p>
          </div>

        </div> {/* closes flex wrapper */}
      </div>
    </section>
  );
};

export default Contacts;
