import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../../styles/style.css';

const SignInContent = () => {

    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');

    const check = event =>{
        event.preventDefault();
        if(localStorage.getItem('password')){
            if(password === localStorage.getItem('password') && mail === localStorage.getItem('mail')){
                console.log('nice')
            }
        }
    }

    const updateMail = (eMail) =>{
        setMail(eMail.target.value);
    }

    const updatePassword = (pass) =>{
        setPassword(pass.target.value);
    }

    return (
        <main className="sign-in-page">
            <h1 className="visually-hidden">Travel App</h1>
            <form className="sign-in-form" autoComplete="off" onSubmit={check}>
                <h2 className="sign-in-form__title">Sign In</h2>
                <label className="trip-popup__input input">
                    <span className="input__heading">Email</span>
                    <input name="email" type="email"  onChange={updateMail} required/>
                </label>
                <label className="trip-popup__input input">
                    <span className="input__heading">Password</span>
                    <input name="password" type="password" autoComplete="new-password"  onChange={updatePassword} required/>
                </label>
                <button className="button" type="submit">Sign In</button>
            </form>
            <span>
            Already have an account?
            <Link to="/sign-up" className="sign-in-form__link">Sign Up</Link>
          </span>
        </main>
    );
};

export default SignInContent;