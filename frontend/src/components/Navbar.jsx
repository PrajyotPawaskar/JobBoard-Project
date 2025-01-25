import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-lg font-custom sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Link to="/">JobPortal</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Menu Items */}
        <ul
          className={`lg:flex lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all ${isMenuOpen ? 'block' : 'hidden'
            }`}
        >
          <li className="border-b lg:border-none">
            <Link to="/signup" className="block lg:inline-block text-gray-700 font-medium hover:text-blue-600 transition-colors px-6 py-3 lg:p-0">SignUp</Link>
          </li>
          <li className="border-b lg:border-none">
            <Link to="/signin" className="block lg:inline-block text-gray-700 font-medium hover:text-blue-600 transition-colors px-6 py-3 lg:p-0">SignIn</Link>
          </li>
          <li className="border-b lg:border-none">
            <Link to="/setprofile" className="block lg:inline-block text-gray-700 font-medium hover:text-blue-600 transition-colors px-6 py-3 lg:p-0">Set Profile</Link>
          </li>
          <li className="border-b lg:border-none">
            <Link to="/getprofile" className="block lg:inline-block text-gray-700 font-medium hover:text-blue-600 transition-colors px-6 py-3 lg:p-0">Profile</Link>
          </li>
          <li className="border-b lg:border-none">
            <Link to="/updateprofile" className="block lg:inline-block text-gray-700 font-medium hover:text-blue-600 transition-colors px-6 py-3 lg:p-0">Update Profile</Link>
          </li>
          <li className="border-b lg:border-none">
            <Link to="/deleteprofile" className="block lg:inline-block text-gray-700 font-medium hover:text-blue-600 transition-colors px-6 py-3 lg:p-0">Delete Profile</Link>
          </li>
          <li className="border-b lg:border-none">
            <Link to="/getjobs" className="block lg:inline-block text-gray-700 font-medium hover:text-blue-600 transition-colors px-6 py-3 lg:p-0">Jobs</Link>
          </li>
          <li className="border-b lg:border-none">
            <Link to="/postjob" className="block lg:inline-block text-gray-700 font-medium hover:text-blue-600 transition-colors px-6 py-3 lg:p-0">Post Job</Link>
          </li>
          <li className="border-b lg:border-none">
            <div className="block lg:inline-block px-6 py-3 lg:p-0"><Logout /></div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
