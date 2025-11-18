import React from 'react';

const CustomersFeedback = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-4 tracking-tight">
          What Our Patients Say
        </h2>
        <p className="text-gray-800 text-center text-lg mb-12 max-w-[700px] mx-auto">
          A small river named Duden flows by their place, offering a serene dental experience.
        </p>

        <div className="flex flex-rows gap-6 justify-center">
          <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
            <p className="text-gray-600 mb-4">
              "The best dental experience! The staff is friendly and the environment is so calming."
            </p>
            <p className="text-3xl font-bold">Samuel Quaye</p>
          </div>

          <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
            <p className="text-gray-600 mb-4">
              "I was nervous, but the team made me feel so comfortable. Highly recommend!"
            </p>
            <p className="text-3xl font-bold">Isaac Quaye</p>
          </div>

          <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
            <p className="text-gray-600 mb-4">
              "Professional and efficient. My teeth have never looked better!"
            </p>
            <p className="text-3xl font-bold">Ishmeal Quaye</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersFeedback
