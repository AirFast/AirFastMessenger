import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../store/actions/authActions';
import styles from './Navbar.module.css';

const SignOutLinks = (props) => {
    return (
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <NavLink exact to={'/'} activeClassName={styles.active}>Home</NavLink>
            </li>
            <li className={styles.navItem}>
                <button className={styles.navBtn} onClick={props.logout}>Logout</button>
            </li>
            <li className={styles.navItem}>
                <NavLink to={'/profile'} activeClassName={styles.active}>
                    <span className={styles.profileAvatar}>AP</span>
                </NavLink>
            </li>
        </ul>
    );
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
})

export default connect(null, mapDispatchToProps)(SignOutLinks);