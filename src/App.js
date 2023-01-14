import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Products from './pages/Products';
// import Organizations from './pages/Organizations';
import Messages from './pages/Messages';
import SignIn from './pages/SignIn';
import Dashboard from './components/Dashboard/Dashboard'
import OrganizationsSelection from "./pages/OrganizationsSelection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/'  element={<Dashboard />} />
          <Route path='/profile' element={<Profile />}/>
          <Route path='/products' element={<Products />} />
          <Route path='/organizations' element={<OrganizationsSelection />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/support' element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;