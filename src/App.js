
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Team from './pages/Team';
import Messages from './pages/Messages';
import Support from './pages/Support';
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/'  element={<Dashboard />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/products' element={<Products />} />
          <Route path='/team' element={<Team />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/support' element={<Support />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;