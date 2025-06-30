import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Layout from './pages/LayoutPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={ isLoggedIn ? < HomePage /> : <Navigate to="/login" />} />
          <Route path="/home" element={isLoggedIn ? <LoginPage /> : <Navigate to="/login" />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
