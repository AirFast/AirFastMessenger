import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Login = (props) => {
    const {auth} = props;
    if (auth.uid) return <Redirect to={'/'}/>

    return (
        <div className='row'>
            <LoginForm/>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
})

export default connect(mapStateToProps)(Login);