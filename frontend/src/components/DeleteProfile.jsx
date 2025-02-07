import axios from 'axios'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/authContext';
const DeleteProfile = () => {
  const { token } = useAuth();
  const handleDelete = async () => {
    try {
      const res = await axios.delete('https://jobboard-project.onrender.com/profile/delete',
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      toast.success("Profile Deleted Successfully");
    } catch (error) {
      toast.error("Error deleting profile");
    }
  }
  return (
    <div className="flex justify-center font-custom items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Delete Profile</h1>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete your profile? This action cannot be undone.
        </p>
        <button
          onClick={handleDelete}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Delete Profile
        </button>
        <ToastContainer />
      </div>
    </div>

  )
}

export default DeleteProfile