import React from 'react'
import Footer from './Footer'
const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-black w-full py-24 px-4 text-center text-white">
        {/* Hero Section */}
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Discover Your Dream Job Today
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Connect with top employers and accelerate your career. Find job listings that match your skills and preferences with ease.
        </p>
        <a
          href="/getjobs"
          className="bg-white text-black py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105 duration-200"
        >
          Browse Jobs
        </a>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 text-center bg-gray-50">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">Why Choose Our Job Board?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-xl transition transform hover:scale-105 duration-200">
            <h3 className="text-2xl font-semibold text-black  mb-4">Explore a Wide Range of Jobs</h3>
            <p className="text-gray-700">
              Browse jobs from various industries like tech, healthcare, finance, and more. We have something for everyone!
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl transition transform hover:scale-105 duration-200">
            <h3 className="text-2xl font-semibold text-black mb-4">Simple and Quick Application</h3>
            <p className="text-gray-700">
              Apply to your desired roles with just a few clicks. Our platform ensures a seamless application process.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl transition transform hover:scale-105 duration-200">
            <h3 className="text-2xl font-semibold text-black  mb-4">Get Tailored Job Alerts</h3>
            <p className="text-gray-700">
              Stay updated with personalized job alerts directly to your inbox. Never miss an opportunity!
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Take the Next Step in Your Career</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who’ve found their perfect job. Your future starts now!
        </p>
        <a
          href="/getjobs"
          className="bg-white text-black py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105 duration-200"
        >
          Start Your Search
        </a>
      </div>
    <Footer/>
    </>
  )
}

export default Home