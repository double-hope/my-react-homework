import React, {useContext} from 'react';
import icon from '../../../assets/images/briefcase.svg';
import profileIcon from '../../../assets/images/user.svg';
import {Link} from 'react-router-dom';
import './style.css';
import {AuthContext} from "../../../context";

const Nav = () => {

    const {setIsAuth} = useContext(AuthContext);

    const click = (e) =>{
        e.preventDefault();
        localStorage.removeItem('auth');
        setIsAuth(false);
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
                            <li className='profile-nav__item profile-nav__username'>John Doe</li>
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