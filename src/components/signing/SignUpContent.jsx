import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/style.css';
import {AuthContext} from "../../context";
import {useDispatch, useSelector} from "react-redux";
import {addUser, getUsers} from "../../store/users/actions";
import {DataStatus} from "../../common/enums/app/dataStatusEnum";
import Loader from "../UI/loader/Loader";
import { idGenerator } from '../../helpers/helpers';

const SignUpContent = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const [name, setName] = useState('');
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


    const createUser = event =>{

        event.preventDefault();

        for (const user of users) {
            if(user.userMail === mail){
                alert('User with this mail is already exists, try to sign in');
                return;
            }
        }

        if(password.length <= 3){
            alert('Your password is too short');
            return;
        }
        if(password.length >= 20){
            alert('Your password is too long');
            return;
        }

        const user = {
            userName: name,
            userMail: mail,
            userPassword: password,
            userId: idGenerator(),
            userTrips: [],
        }

        dispatch(addUser(user));

        setIsAuth(true);
        localStorage.setItem('auth', 'true');
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