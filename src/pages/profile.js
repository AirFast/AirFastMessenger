import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ProfileSettingsForm from '../components/Profile/ProfileSettingsForm';

const Profile = (props) => {

    const {auth, profile} = props;
    if (!auth.uid) return <Redirect to={'/login'}/>

    return (
        <>
            <div className='row'>
                <div className='col-5 col-md-7 col-sm-12 p-60 m-auto'>
                    <h2 className='t-center'>{profile.firstName} {profile.lastName}</h2>
                    <p className='t-center'>This is your profile page. Here you can make the necessary settings.</p>
                    {profile.photoURL && <img src={profile.photoURL} alt={profile.firstName + ' ' + profile.lastName}/>}
                </div>
            </div>
            <div className='row'>
                <ProfileSettingsForm/>
            </div>
        </>

    );
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
});

export default connect(mapStateToProps)(Profile);