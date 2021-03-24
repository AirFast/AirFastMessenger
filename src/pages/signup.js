import React from 'react';
import SignupForm from '../components/Auth/SignupForm';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Signup = (props) => {
    const {auth} = props;
    if (auth.uid) return <Redirect to={'/'}/>

    return (
        <div className='row h-100'>
            <SignupForm/>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
})

export default connect(mapStateToProps)(Signup);