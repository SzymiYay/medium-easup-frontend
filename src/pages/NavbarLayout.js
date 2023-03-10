import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function NavbarLayout() {
  return (
    <div className='navbar-layout'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default NavbarLayout;