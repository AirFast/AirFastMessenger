import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const Profile = (props) => {
    const {auth} = props;
    if (!auth.uid) return <Redirect to={'/login'}/>

    return (
        <div className='row'>
            <h1>Profile page</h1>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.firebase.auth
});

export default connect(mapStateToProps)(Profile);