import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;