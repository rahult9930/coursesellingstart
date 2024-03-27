import { useState } from 'react'
import Signup from './components/Signup'
import Appbar from './components/Appbar'
import Signin from './components/Signin';
import Addcourse from './components/addcourse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div style={{
      width:"100vw",
      height:"100vh",
      backgroundColor:"#D2E0FB"
    }}>
       
         <Router>
         <Appbar />
            <Routes>
                {/* <Route path="/" element={<Landing />} /> */}
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/addcourse" element={<Addcourse />} />
                {/* <Route path="/courses" element={<ShowCourses />} /> */}
            </Routes>
        </Router>
    </div>
  )
}

export default App
