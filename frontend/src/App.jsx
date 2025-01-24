import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import SetProfile from './components/SetProfile'
import GetProfile from './components/GetProfile'
import UpdateProfile from './components/UpdateProfile'
import DeleteProfile from './components/DeleteProfile'
import GetJobs from './components/GetJobs'
import PostJob from './components/PostJob'
import Getinfo from './components/Getinfo'
import GetSingleJob from './components/GetSingleJob'
import ApplyJob from './components/ApplyJob'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/getinfo" element={<Getinfo />} />
        <Route path="/setprofile" element={<SetProfile />} />
        <Route path="/getprofile" element={<GetProfile />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/deleteprofile" element={<DeleteProfile />} />
        <Route path="/getJobs" element={<GetJobs />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/job/:id" element={<GetSingleJob />} />
        <Route path="/applyjob/:id" element={<ApplyJob />} />
      </Routes>
    </>
  )
}

export default App
