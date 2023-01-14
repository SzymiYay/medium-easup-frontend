import React from 'react';

import './SignInForm.css'

const LogIn = () => {
  return (
    <div className='log-in'>
      <button>Log In</button>
      <p>New user? <a href="https://www.youtube.com/watch?v=jfKfPfyJRdk">Sign up</a></p>
    </div>
  );
}

const EmailInput = () => {
  return (
    <div className='email-input'>
      Email
      <InputField/>
    </div>
  );
}

const PasswordInput = () => {
  return (
    <div className='password-input'>
      Password
      <InputField/>
      <p className='to-right'><a href="https://www.youtube.com/watch?v=jfKfPfyJRdk">forgot password</a></p>
    </div>
  );
}

const InputField = () => {
  return (
    <div className='input-field'>
      <input/>
    </div>
  );
}

const SignInForm = () => {
  return (
    <div className='container2'>
      <div className='sign-in-form'>
        <h1>Sign In</h1>
        <EmailInput/>
        <PasswordInput/>
        <LogIn/>
      </div>
    </div>
    // <div className='sign-in-form'>
    //   <h1>Sign In</h1>
    //   <EmailInput/>
    //   <PasswordInput/>
    //   <LogIn/>
    // </div>

  );
}

export default SignInForm;