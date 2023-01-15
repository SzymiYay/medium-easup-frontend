import React from 'react';
import './SignInForm.css'
import useAxiosFunction from "../../hooks/useAxiosFunction";
import axios from '../../apis/easup'
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
    const [user, error, loading, axiosFetch] = useAxiosFunction();
    const navigate = useNavigate();

    const handleSubmit = () => {
        axiosFetch({
            axiosInstance: axios,
            method: 'post',
            url: '/users/login',
            data: {
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
            }
        }).then(res => console.log('response' + res)).catch(err => console.log('error' + err));
    }

    const LogIn = () => {
        return (
            <div className='log-in'>
                <button onClick={handleSubmit}>Log In</button>
                <p>New user? <a href="https://www.youtube.com/watch?v=jfKfPfyJRdk">Sign up</a></p>
            </div>
        );
    }

    const EmailInput = () => {
        return (
            <div className='email-input'>
                Email
                <InputField type='normal' inputId='email' id="email"/>
            </div>
        );
    }

    const PasswordInput = () => {
        return (
            <div className='password-input'>
                Password
                <InputField type='password' inputId='password' id="password"/>
                <p className='to-right'><a href="https://www.youtube.com/watch?v=jfKfPfyJRdk">forgot password</a></p>
            </div>
        );
    }

    const InputField = (props) => {
        return (
            <div className='input-field'>
                <input type={props.type} id={props.inputId}/>
            </div>
        );
    }

    function saveUserId(){
        localStorage.setItem("userId", JSON.stringify(user.id))
    }

    const EventMessageComponent = (props) => {
        return (
            <div className='event-handler-div'>
                <p className='error-message'>{props.message}</p>
            </div>
        );
    }

  return (
    <div className='container2'>
        <div className='sign-in-form'>
            <h1>Sign In</h1>
            <EmailInput/>
            <PasswordInput/>
            <LogIn/>
        </div>

            {!loading && error && <EventMessageComponent message={error}/>}

            {!loading && !error && !user && <EventMessageComponent message='Something went wrong'/>}

            {loading && <LoadingIcon/>}

            {!loading && !error && user && user.id && saveUserId() && navigate("/organizations")}

    </div>
  );
}

export default SignInForm;