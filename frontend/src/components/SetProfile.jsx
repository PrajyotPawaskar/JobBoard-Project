import React from 'react'
import { useAuth } from '../context/authContext';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SetProfile = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim and validate fields properly
    if (![name, email, phoneno, education, skills, experience, location].every(field => field.trim() !== "")) {
      toast.error("Please fill in all the fields properly");
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/profile/setprofile', {
        name: name.trim(),
        email: email.trim(),
        phoneno: phoneno.trim(),
        education: education.trim(),
        skills: skills.split(',').map(skill => skill.trim()).filter(Boolean), // Remove empty values
        experience: Number(experience.trim()),
        location: location.split(',').map(loc => loc.trim()).filter(Boolean),
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      toast.success("Profile Set Successfully");
    } catch (error) {
      console.error("Error details:", error.response?.data || error);
      toast.error(error.response?.data?.message || "Error setting profile");
    }
    console.log(name, email, phoneno, education, skills, experience, location);
  }

  return (
    <>
      <div className="flex justify-center items-center font-custom min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-3xl p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Set Your Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
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
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phoneno" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="number"
                  id="phoneno"
                  name="phoneno"
                  value={phoneno}
                  onChange={(e) => setPhoneno(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                  Education
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your education"
                />
              </div>
            </div>
            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                  Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your skills"
                />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Experience (in Years)
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your experience"
                />
              </div>
            </div>
            {/* Row 4 */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Preferred Locations
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter preferred locations"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-black focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Set Profile
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default SetProfile;
