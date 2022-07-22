import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/style.css';
import { AuthContext } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/users/actions";
import { DataStatus } from "../../common/enums/app/dataStatusEnum";
import Loader from "../UI/loader/Loader";

const SignInContent = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const { users, status } = useSelector(({ users }) => ({
        users: users.users,
        status: users.status,
    }));

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers());
    }, [dispatch]);

    if(status === DataStatus.PENDING)
        return (
            <>
                <main style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                    <Loader/>
                </main>
            </>

        );

    const check = (event) =>{
        event.preventDefault();

        for (const user of users) {

            if(user.userMail === mail){
                if(user.userPassword === password){
                    setIsAuth(true);
                    localStorage.setItem('user', JSON.stringify(user))
                    localStorage.setItem('auth', 'true');
                    return;
                }
                else{
                    alert('You\'ve entered incorrect mail or password, try again');
                }
            }
            alert('You are not register, try to sign up');
        }
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