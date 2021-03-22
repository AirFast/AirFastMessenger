import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

const SignOutLinks = () => {
    return (
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <NavLink to={'/login'} activeClassName={styles.active}>Login</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to={'/signup'} activeClassName={styles.active}>Signup</NavLink>
            </li>
        </ul>
    );
}

export default SignOutLinks;