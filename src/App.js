import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import TasksPage from './pages/TasksPage'
import BoardPage from './pages/BoardPage'
import OrganizationsSelection from "./pages/OrganizationsSelection";
import Project from "./pages/Project";
import Organization from "./pages/Organization";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/'  element={<SignIn />} />
          <Route path='/board' element={<BoardPage />} />
          <Route path='/organizations' element={<OrganizationsSelection />} />
          <Route path='/organization' element={<Organization />} />
          <Route path='/profile' element={<Profile />}/>
          <Route path='/tasks' element={<TasksPage />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;