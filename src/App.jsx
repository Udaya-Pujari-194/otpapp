// import './App.css'

import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Resend from './components/pages/Resend';

function App() {

  return (
    <>
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resend" element={<Resend/>} />
       </Routes>
    </>
  )
}

export default App
