import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { token, user } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://jobboard-project.onrender.com/user/login', { email, password });
      setEmail('');
      setPassword('');
      toast.success("Login Successful");
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', JSON.stringify(res.data.user._id));
      navigate('/');
    } catch (error) {
      toast.error('Error during login');
      console.error(error);
    }
  }

  return (
    <div className="flex justify-center font-custom items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg sm:max-w-md md:max-w-md">
        <div className='text-2xl font-bold text-center mb-6 text-gray-800'>SignIn</div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-black focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>


  )
}

export default Signin