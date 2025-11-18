import React from 'react'

const FAQ = () => {
  return (
    <section className="py-20 mb-20 mt-10 bg-[#ecf0f1]">
        <div className="w-[1000px] mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-black mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-black text-center mb-12 max-w-2xl mx-auto">Find answers to common questions about our dental services.</p>

            <div className="space-y-4 m">
                <details className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                    <summary className=" text-lg font-semibold text-black">How often should I visit the dentist?</summary>
                    <p className="text-black mt-2">We recommend a visit every six months for checkups and cleanings to maintain optimal oral health.</p>
                </details>

                <details className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                    <summary className=" text-lg font-semibold text-black">Does teeth whitening hurt?</summary>
                    <p className="text-black mt-2">Our whitening procedures are safe and painless, with minimal sensitivity that subsides quickly.</p>
                </details>

                <details className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                    <summary className=" text-lg font-semibold text-black">What should I do in a dental emergency?</summary>
                    <p className="text-black mt-2">Contact us at + (123) 456 7890 for immediate emergency dental services.</p>
                </details>
            </div>
        </div>
    </section>
  )
}

export default FAQ