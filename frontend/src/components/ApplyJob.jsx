import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyJob = () => {
  const { token } = useAuth();
  const { id } = useParams();
  const [data, setData] = useState({});

  const getSingleData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/jobs/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setData(res.data.jobs);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching job data");
    }
  }

  useEffect(() => {
    getSingleData();
  }, [id]);

  const applyJob = async () => {
    try {
      const res = await axios.post(`http://localhost:3000/jobs/${id}`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(res.data);
      toast.success("Applied Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error applying for the job");
    }
    console.log("token", token);
    console.log("id", id);
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12 px-4 font-custom">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Apply Job</h1>
          {data && (
            <>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">{data.company}</h2>
                <h3 className="text-xl text-gray-700">{data.role}</h3>
                <h3 className="text-lg text-gray-600">Skills: <span className="font-medium text-gray-800">{data.skills?.join(", ")}</span></h3>
                <h3 className="text-lg text-gray-600">Experience: <span className="font-medium text-gray-800">{data.experience}</span></h3>
                <h3 className="text-lg text-gray-600">Package: <span className="font-medium text-gray-800">{data.pay}</span></h3>
                <h3 className="text-lg text-gray-600">Location: <span className="font-medium text-gray-800">{data.location?.join(", ")}</span></h3>
              </div>
              <button
                onClick={applyJob}
                className="w-full bg-black text-white py-2 px-4 rounded-md shadow hover:bg-gray-800 transition"
              >
                Apply
              </button>
            </>
          )}
          <ToastContainer />
        </div>
      </div>

    </>
  );
}

export default ApplyJob;
