import React from 'react'
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Logout = () => {
    const navigate = useNavigate();
    const {setToken , setUser} = useAuth();
    const handleDelete = ()=>{
        localStorage.clear();
        setToken(null);
        setUser(null);
        navigate('/');
        toast.success('Logout Successful');
    }
  return (
    <>
        <button onClick={handleDelete}>Logout</button>
        <ToastContainer />
    </>
  )
}

export default Logout