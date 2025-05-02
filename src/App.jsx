// import './App.css'

import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Resend from './components/pages/Resend';
import Loginpage from './components/pages/Loginpage';
import Navbar from './components/pages/Navbar';

function App() {
  // bg-gradient-to-r from-green-400 to-blue-500

  return (
    <>
       <div 
      //  className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500" 
      >
        {/* <Navbar/> */}
          <Routes>
           <Route path='/' element={<Loginpage/>}/>
             <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
       </div>
    </>
  )
}

export default App
