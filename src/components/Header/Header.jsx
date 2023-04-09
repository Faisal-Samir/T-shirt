import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='navigation'>
            <ActiveLink className='link' to="/">Home</ActiveLink>
            <ActiveLink className='link' to="/review">Order Review</ActiveLink>
        </nav>
    );
};

export default Header;