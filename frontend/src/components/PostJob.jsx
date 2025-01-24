import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostJob = () => {
  const { token } = useAuth();
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [pay, setPay] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/jobs/postjob',
        {
          company:company.trim(),
          role: role.trim(),
          skills: skills.split(',').map(skill => skill.trim()).filter(Boolean),
          experience: Number(experience.trim()),
          pay: Number(pay.trim()),
          location: location.split(',').map(loc => loc.trim()).filter(Boolean),
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
        toast.success("Job Posted Successfully");
    } catch (error) {
      console.error('Error posting job:', error);
      toast.error("Error posting job");
    }
    console.log(token);
    
  };

  return (
    <>
      <div className="px-4 py-32 font-custom bg-gray-100 min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Post Job</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Name:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter company name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Role Name:
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Enter role name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="skills"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Skills:
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Enter skills required"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Experience:
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Enter required experience"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="pay"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pay:
              </label>
              <input
                type="text"
                id="pay"
                name="pay"
                value={pay}
                onChange={(e) => setPay(e.target.value)}
                placeholder="Enter pay details"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter job location"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md shadow hover:bg-black transition"
          >
            Post Job
          </button>
        </form>
        <ToastContainer />
      </div>



    </>
  );
};

export default PostJob;
