import React from 'react';

import ProfileForm from "../components/ProfileForm/ProfileForm";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Profile() {
  return (
    <div className='profile'>
        <Navbar/>
      <ProfileForm />
      {/*<Footer />*/}
    </div>
  )
}

export default Profile;