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
import NavbarLayout from "./pages/NavbarLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/'  element={<SignIn />} />
          <Route path='/organizations' element={<OrganizationsSelection />} />
          <Route exact path='/app' element={<NavbarLayout/>}>
            <Route path='/app/organization' element={<Organization />} />
            <Route path='/app/profile' element={<Profile />}/>
            <Route path='/app/tasks' element={<TasksPage />} />
            <Route path='/app/project' element={<Project />} />
            <Route path='/app/board' element={<BoardPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;