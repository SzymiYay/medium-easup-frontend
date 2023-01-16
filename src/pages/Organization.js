import React from 'react';

import OrganizationForm from "../components/OrganizationForm/OrganizationForm";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Profile() {
  return (
    <div className='profile'>
      <Navbar/>
      <OrganizationForm />
      {/*<Footer />*/}
    </div>
  )
}

export default Profile;