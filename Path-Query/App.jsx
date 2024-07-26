import UserProfile from './Components/UserProfile'
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from 'react-router-dom';

const App = () => {
 
  return (
    <div className='all'>
      <h1>Hello</h1>
     <Router>
        <nav>
          <ul>
            <li>
              <Link to="/UserProfile">userProfile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
       <Route path="/UserProfile/:id/:name" element={<UserProfile/>}/>
      
         
        </Routes>
     </Router>
    </div>

  )
}

export default App