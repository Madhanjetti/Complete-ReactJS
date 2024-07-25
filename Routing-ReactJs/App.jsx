import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Education from './Components/Education';
import Marks,{Semmarks,Studentinfo} from './Components/Marks';
import Profile from './Components/Profile';
const App = () => {
 
  return (
    <div className='all'>
      <h1>Hello</h1>
     <Router>
        <nav>
          <ul>
           
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="education">Education</Link>
            </li>
            <li>
              <Link to="/marks">Marks</Link>
            </li>
          </ul>
        </nav>
        <Routes>
      <Route path='profile' element={<Profile/>}/>
          <Route path="education" element={<Education />} />
          <Route path="marks" element={<Marks />} >
          <Route path="Semmarks" element={<Semmarks/>}/>
          <Route path='Studentinfo' element={<Studentinfo/>}/>
          </Route>
        </Routes>
     </Router>
    </div>

  )
}

export default App
