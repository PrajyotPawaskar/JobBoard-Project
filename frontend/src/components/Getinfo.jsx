import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/authContext'
const Getinfo = () => {
  const { token } = useAuth();
  const [info, setInfo] = useState(null);
  try {
    const getInfo = async () => {
      const res = await axios.get('https://jobboard-project.onrender.com/user/userdata', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setInfo(res.data);
    }
    useEffect(() => {
      getInfo();
    }, []);
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      <h2>Your Info:</h2>
      <div>
        <h3>{info && info.id}</h3>
      </div>
    </div>
  )
}

export default Getinfo