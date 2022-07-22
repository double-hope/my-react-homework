import React, {useContext, useEffect} from 'react';
import icon from '../../../assets/images/briefcase.svg';
import profileIcon from '../../../assets/images/user.svg';
import {Link} from 'react-router-dom';
import './style.css';
import {AuthContext} from "../../../context";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../store/users/actions";
import { fetchBookings } from "../../../store/bookings/actions";
import {DataStatus} from "../../../common/enums/enums";
import Loader from '../loader/Loader';

const Nav = () => {

    const { setIsAuth } = useContext(AuthContext);

    const { users, status } = useSelector(({ users }) => ({
        users: users.users,
        status: users.status,
    }));

    const { bookings, bookingsStatus } = useSelector(({ bookings }) => ({
        bookings: bookings.bookings,
        bookingsStatus: bookings.bookingsStatus,
    }));

    const dispatch = useDispatch();

    let user;

    useEffect(()=>{
        dispatch(getUsers());
    }, [dispatch]);

    for (const u of users) {
        console.log(users)
        if(u.auth === true)
            user = u;
    }

    const click = (e) =>{
        e.preventDefault();
        dispatch(fetchBookings());

        if(status === DataStatus.PENDING || bookingsStatus === DataStatus.PENDING){
            return (
                <>
                    <main className='bookings-page'>
                        <Loader/>
                    </main>
                </>

            );
        } else {
            for (const user of users) {

                if(user.auth === true){
                    user.userTrips = bookings;
                    user.auth = false;
                }
            }

            localStorage.removeItem('auth');
            setIsAuth(false);
        }
    }

    return (
        <nav className='header__nav'>
            <ul className='nav-header__list'>
                <li className='nav-header__item' title='Bookings'>
                    <Link to='/bookings' className='nav-header__inner'>
                        <span className='visually-hidden'>Bookings</span>
                        <img src={icon} alt=' icon'/>
                    </Link>
                </li>
                <li className='nav-header__item' title='Profile'>
                    <div className='nav-header__inner profile-nav' tabIndex='0'>
                        <span className='visually-hidden'>Profile</span>
                        <img src={profileIcon} alt='profile icon'/>
                        <ul className='profile-nav__list'>
                            <li className='profile-nav__item profile-nav__username'>{user? user.userName : 'Unknown'}</li>
                            <li className='profile-nav__item'>
                                <button onClick={click} className='profile-nav__sign-out button'>Sign Out</button>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;