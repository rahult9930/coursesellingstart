import { useState } from 'react'
import Signup from './components/Signup'
import Appbar from './components/Appbar'
import Signin from './components/Signin';
import Addcourse from './components/addcourse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './components/courses';
import Course from './components/course';
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
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:courseId" element={<Course />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
