import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

const SignInLinks = () => {
    return (
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <NavLink exact to={'/'} activeClassName={styles.active}>Home</NavLink>
            </li>
            <li className={styles.navItem}>
                <button className={styles.navBtn}>Logout</button>
            </li>
            <li className={styles.navItem}>
                <NavLink to={'/profile'} activeClassName={styles.active}>
                    <span className={styles.profileAvatar}>AP</span>
                </NavLink>
            </li>
        </ul>
    );
}

export default SignInLinks;