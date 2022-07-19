import React from 'react';
import {Link} from 'react-router-dom';
import Nav from '../nav/Nav';
import '../../../styles/style.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__inner'>
                <Link to='/' className='header__logo'>Travel App</Link>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;