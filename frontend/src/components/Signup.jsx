import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jobboard-project.onrender.com/user/register', { email, password, role });
      toast.success("Signup Successful");
      setEmail('');
      setPassword('');
      setRole('');
      navigate('/');
    } catch (error) {
      toast.error('Error during registration');
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center font-custom items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg sm:max-w-md md:max-w-md">
      <div className='text-2xl font-bold text-center mb-6 text-gray-800'>Signup</div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Role
          </label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                id="employee"
                value="employee"
                checked={role === "employee"}
                onChange={(e) => setRole(e.target.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Employee</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                id="employer"
                value="employer"
                checked={role === "employer"}
                onChange={(e) => setRole(e.target.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Employer</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-black focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Signup
        </button>
      </form>
      <ToastContainer />
    </div>
    </div>

  )
}

export default Signup;
