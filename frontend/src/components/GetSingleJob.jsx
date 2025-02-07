import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../context/authContext';
const GetSingleJob = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const {token} = useAuth();
  const getSingleData = async () => {
    try {
      const res = await axios(`https://jobboard-project.onrender.com/jobs/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      console.log(res.data.jobs);
      setData(res.data.jobs);
    } catch (error) {
      console.error(error);

    }
  }
  useEffect(() => {
    getSingleData();
  }, [id])
  return (
    <>
      <div className="p-6 font-custom bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Job Detail:</h1>
          {data ? (
            <>
              <h2 className="text-xl font-semibold text-gray-700">{data.company}</h2>
              <h3 className="text-lg text-gray-600 mt-2">Role: {data.role}</h3>
              <h3 className="text-lg text-gray-600 mt-2">
                Skills:{" "}
                <span className="font-medium text-gray-700">{data.skills.join(", ")}</span>
              </h3>
              <h3 className="text-lg text-gray-600 mt-2">
                Experience: <span className="font-medium text-gray-700">{data.experience}</span>
              </h3>
              <h3 className="text-lg text-gray-600 mt-2">
                Package: <span className="font-medium text-gray-700">{data.pay}</span>
              </h3>
              <h3 className="text-lg text-gray-600 mt-2">
                Location:{" "}
                <span className="font-medium text-gray-700">{data.location.join(", ")}</span>
              </h3>
              {data.applications.length > 0 ? (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Applications:</h3>
                  <ul className="space-y-4">
                    {data.applications.map((application, index) => (
                      <li
                        key={index}
                        className="border border-gray-300 p-4 rounded-lg shadow-sm bg-gray-50"
                      >
                        <p>
                          <strong className="text-gray-800">Name:</strong>{" "}
                          {application.profile.name}
                        </p>
                        <p>
                          <strong className="text-gray-800">Email:</strong>{" "}
                          {application.profile.email}
                        </p>
                        <p>
                          <strong className="text-gray-800">Phone:</strong>{" "}
                          {application.profile.phoneno}
                        </p>
                        <p>
                          <strong className="text-gray-800">Education:</strong>{" "}
                          {application.education}
                        </p>
                        <p>
                          <strong className="text-gray-800">Skills:</strong>{" "}
                          {application.profile.skills.join(", ")}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="mt-6 text-gray-500 italic">No applications yet.</p>
              )}
            </>
          ) : (
            <p className="text-gray-500 italic">Loading...</p>
          )}
        </div>
      </div>
    </>

  )
}

export default GetSingleJob