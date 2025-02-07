import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/authContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');

  const { token } = useAuth();

  // Fetch user profile data
  const getDataInfo = async () => {
    try {
      const res = await axios.get('https://jobboard-project.onrender.com/profile/getinfo', {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      const profile = res.data.profile || {};
      setName(profile.name ?? '');
      setEmail(profile.email ?? '');
      setPhoneno(profile.phoneno ? String(profile.phoneno) : '');
      setEducation(profile.education ?? '');
      setSkills(profile.skills ? profile.skills.join(', ') : ''); // Convert array to string
      setExperience(profile.experience ? String(profile.experience) : '');
      setLocation(profile.location ? profile.location.join(', ') : ''); // Convert array to string
      console.log(res.data.profile);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the fields properly with explicit type checking
    const fields = [name, email, phoneno, education, skills, experience, location];

    const allFieldsValid = fields.every(field =>
      typeof field === 'string' && field.trim() !== ''
    );

    if (!allFieldsValid) {
      toast.error("Please fill in all the fields properly");
      return;
    }

    try {
      const res = await axios.put('https://jobboard-project.onrender.com/profile/update', {
        name: name.trim(),
        email: email.trim(),
        phoneno: phoneno.trim(),
        education: education.trim(),  // Handle trimming for education
        skills: skills.split(',').map(skill => skill.trim()).filter(Boolean),  // Convert skills string to array
        experience: Number(experience.trim()),  // Ensure number conversion
        location: location.split(',').map(loc => loc.trim()).filter(Boolean), // Convert location string to array
      }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile");
    }
  };

  return (
    <>
      <div className="flex justify-center font-custom items-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-3xl bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Update Your Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
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

            {/* Phone and Education */}
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

            {/* Skills and Experience */}
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

            {/* Preferred Locations */}
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
              className="w-full bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Set Profile
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>

    </>
  );
};

export default UpdateProfile;
