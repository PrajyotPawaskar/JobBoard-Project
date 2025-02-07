import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
const GetJobs = () => {
  const { token } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (token) getJobsInfo();
  }, [token]);

  const getJobsInfo = async () => {
    try {
      const response = await axios.get('https://jobboard-project.onrender.com/jobs/getjobs', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setJobs(response.data.jobs);
      console.log(response.data.jobs);
      
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <>
        <div className="px-4 py-8 font-custom bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Jobs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
                >
                  <div>
                    <Link to={`/job/${job._id}`}>
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {job.company}
                      </h2>
                    </Link>
                    <h3 className="text-lg text-gray-600">{job.role}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Skills:</strong> {job.skills.join(", ")}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Experience:</strong> {job.experience}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Package:</strong> {job.pay}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Location:</strong> {job.location.join(", ")}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link
                      to={`/applyjob/${job._id}`}
                      className="block text-center bg-black text-white py-2 px-4 rounded-md hover:bg-black transition"
                    >
                      Apply
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 text-lg">
                No jobs available
              </p>
            )}
          </div>
        </div>

    </>
  );
};

export default GetJobs;
