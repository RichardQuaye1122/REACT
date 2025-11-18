import React from 'react';

const TeamContainer = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f4f6f7]">
      <h2 className="text-3xl text-black text-center font-extrabold mt-10">
        Meet Our Expert Team
      </h2>

      <div className="flex gap-8 justify-center mt-10 flex-wrap">
        {/* Team Member 1 */}
        <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <img src="src/assets/images/image3.jpg" alt="Dent1" className="w-[17rem] h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quaye Richard</h3>
            <p className="text-gray-600">Dentist</p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <img src="src/assets/images/image4.jpg" alt="Dent2" className="w-[17rem] h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quaye Richard</h3>
            <p className="text-gray-600">Dentist</p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <img src="src/assets/images/image5.jpg" alt="Dent3" className="w-[17rem] h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quaye Richard</h3>
            <p className="text-gray-600">Dentist</p>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <img src="src/assets/images/image6.jpg" alt="Dent4" className="w-[17rem] h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quaye Richard</h3>
            <p className="text-gray-600">Dentist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamContainer
