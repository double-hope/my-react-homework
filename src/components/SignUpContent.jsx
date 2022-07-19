import React, {useContext, useState} from 'react';
import {Link, Redirect, Route, useHistory} from 'react-router-dom';
import '../styles/style.css';
import {AuthContext} from "../context";

const SignUpContent = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = event =>{

        event.preventDefault();

        const user = {
            name: name,
            email: mail,
            password: password
        }

        if(localStorage.getItem('users')){
            let users = JSON.parse(localStorage.getItem('users'));
            let array;

            if(users.length){
                for(const userInfo of users){
                    if(userInfo.email === user.email){
                        alert('User with this mail is already exists, try to sign in');
                        return;
                    }
                }
                array = [...users, user]
            }
            else{
                if(users.email === user.email){
                    alert('User with this mail is already exists, try to sign in');
                    return;
                }
                array = [users, user]
            }
            setIsAuth(true);
            localStorage.setItem('auth', 'true');
            localStorage.setItem('users', JSON.stringify(array));
        }
        else{
            setIsAuth(true);
            localStorage.setItem('auth', 'true');
            localStorage.setItem('users', JSON.stringify(user));
        }
    }

    return (
        <main className='sign-up-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <form className='sign-up-form' autoComplete='off' onSubmit={createUser}>
                <h2 className='sign-up-form__title'>Sign Up</h2>
                <label className='trip-popup__input input'>
                    <span className='input__heading'>Full name</span>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        name='full-name'
                        type='text'
                        required/>
                </label>
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
                <button className='button' type='submit'>Sign Up</button>
            </form>
            <span>
        Already have an account?
        <Link to='/sign-in' className='sign-up-form__link'>Sign In</Link>
      </span>
        </main>
    );
};

export default SignUpContent;