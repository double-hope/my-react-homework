import React, {useContext, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../../styles/style.css';
import {AuthContext} from "../../context";

const SignInContent = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const check = event =>{

        event.preventDefault();
        if(password.length < 3){
            alert('your password is too short');
            return;

        }
        if(password.length > 20){
            alert('your password is too long');
            return;
        }

        const user = {
            email: mail,
            password: password
        }

        if(localStorage.getItem('users')){
            let users = JSON.parse(localStorage.getItem('users'));
            if(users.length){
                for(const userInfo of users){
                    if(userInfo.email === user.email && userInfo.password === user.password){
                        setIsAuth(true);
                        localStorage.setItem('auth', 'true');
                        return;
                    }
                    else if(userInfo.email === user.email || userInfo.password === user.password){
                        alert('You\'ve entered incorrect mail or password, try again');
                    }
                    else{
                        alert('You are not register, try to sign up');
                    }
                }
            }
            else{
                if(users.email === user.email && users.password === user.password){
                    localStorage.setItem('auth', 'true');
                    setIsAuth(true);
                }
                else if(users.email === user.email || users.password === user.password){
                    alert('You\'ve entered incorrect mail or password, try again');
                }
                else{
                    alert('You are not register, try to sign up');
                }
            }

        }
        else
            alert('You are not register, try to sign up');
    }

    return (
        <main className='sign-in-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <form className='sign-in-form' autoComplete='off' onSubmit={check}>
                <h2 className='sign-in-form__title'>Sign In</h2>
                <label className='trip-popup__input input'>
                    <span className='input__heading'>Email</span>
                    <input
                        value={mail}
                        onChange={e => setMail(e.target.value)}
                        name='email'
                        type='email'
                        required/>
                </label>
                <label className='trip-popup__input input'>
                    <span className='input__heading'>Password</span>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name='password'
                        type='password'
                        autoComplete='new-password'
                        required/>
                </label>
                <button className='button' type='submit'>Sign In</button>
            </form>
            <span>
            Already have an account?
            <Link to='/sign-up' className='sign-in-form__link'>Sign Up</Link>
          </span>
        </main>
    );
};

export default SignInContent;