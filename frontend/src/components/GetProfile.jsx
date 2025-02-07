import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetProfile = () => {
  const [data, setData] = useState({});
  const { token } = useAuth();
  const toastShown = useRef(false); // Prevent duplicate toasts

  const getProfileInfo = async () => {
    try {
      const res = await axios.get('https://jobboard-project.onrender.com/profile/getinfo', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setData(res.data.profile);
      toastShown.current = false; // Reset toast control on success
      console.log(res.data);
    } catch (error) {
      if (!toastShown.current) {
        toast.error(error.response?.data?.message || "Error fetching profile");
        toastShown.current = true;
      }
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12 px-4 font-custom">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Profile</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name & Email */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Name:</h2>
              <p className="text-gray-800 text-xl">{data?.name}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Email:</h3>
              <p className="text-gray-800 text-xl">{data?.email}</p>
            </div>
            {/* Phone & Education */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Phone:</h3>
              <p className="text-gray-800 text-xl">{data?.phoneno}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Education:</h3>
              <p className="text-gray-800 text-xl">{data?.education}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Skills & Experience */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Skills:</h3>
              <p className="text-gray-800 text-xl">{data?.skills?.join(", ")}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Experience:</h3>
              <p className="text-gray-800 text-xl">{data?.experience}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Location & Applied Jobs */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Location:</h3>
              <p className="text-gray-800 text-xl">{data?.location?.join(", ")}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Applied Jobs:</h3>
              <ul className="space-y-2">
                {data?.myJobs?.length > 0 ? (
                  data.myJobs.map((job, index) => (
                    <li key={index} className="text-gray-800">
                      <strong>Company:</strong> {job.company} | <strong>Role:</strong> {job.role} | <strong>Pay:</strong> {job.pay}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-600">No jobs applied yet.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default GetProfile;
