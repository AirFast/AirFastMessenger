import React from 'react';
import styles from './Navbar.module.css'
import {connect} from 'react-redux';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = (props) => {
    const {auth} = props;
    const links = auth.uid ? <SignOutLinks/> : <SignInLinks/>

    return (
        <div className='row'>
            <nav className={styles.navbar + ' col'}>
                {links}
            </nav>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.firebase.auth,
})

export default connect(mapStateToProps)(Navbar);