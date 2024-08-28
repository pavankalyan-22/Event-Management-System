
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminSignup from './Components/AdminSignup/Adminsignup.jsx';

import Login from './Components/Login/Login.jsx' ;


function App() {
  return (
    
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
