import React from 'react';
import styles from './Navbar.module.css'
import SignOutLinks from './SignOutLinks';
import SignInLinks from './SignInLinks';

const Navbar = () => {
    return (
        <div className='row'>
            <nav className={styles.navbar}>
                <SignOutLinks/>
                <SignInLinks/>
            </nav>
        </div>
    );
};

export default Navbar;