import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ProfileSettingsForm from '../components/Profile/ProfileSettingsForm';

const Profile = ({auth}) => {
    if (!auth.uid) return <Redirect to={'/login'}/>

    return (
        <div className='row p-60'>
            <ProfileSettingsForm/>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
});

export default connect(mapStateToProps)(Profile);