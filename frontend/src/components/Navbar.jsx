import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = () => {
  return (
    <div className="bg-white shadow-lg font-custom sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-black">
          <Link to="/">JobPortal</Link>
        </div>
        <ul className="flex space-x-6">
          <li><Link to="/signup" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">SignUp</Link></li>
          <li><Link to="/signin" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">SignIn</Link></li>
          <li><Link to="/setprofile" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Set Profile</Link></li>
          <li><Link to="/getprofile" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Profile</Link></li>
          <li><Link to="/updateprofile" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Update Profile</Link></li>
          <li><Link to="/deleteprofile" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Delete Profile</Link></li>
          <li><Link to="/getjobs" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Jobs</Link></li>
          <li><Link to="/postjob" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">Post Job</Link></li>
          <li><Logout /></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
