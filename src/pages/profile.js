import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ProfileSettingsForm from '../components/Profile/ProfileSettingsForm';
import {setProfilePhotoURL} from '../store/actions/profileActions';

class Profile extends Component {

    componentDidMount() {
        this.props.setProfilePhotoURL(this.props.auth.photoURL)
    }

    render() {
        const {auth, profile, profilePhotoURL} = this.props;
        if (!auth.uid) return <Redirect to={'/login'}/>

        return (
            <>
                <div className='row'>
                    <div className='col-5 col-md-7 col-sm-12 p-60 m-auto'>
                        <h2 className='t-center'>{profile.firstName} {profile.lastName}</h2>
                        <p className='t-center'>This is your profile page. Here you can make the necessary settings.</p>
                        {profilePhotoURL && <img src={profilePhotoURL} />}
                    </div>
                </div>
                <div className='row'>
                    <ProfileSettingsForm/>
                </div>
            </>

        );
    }
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    profilePhotoURL: state.profile.photoURL
});

const mapDispatchToProps = dispatch => ({
    setProfilePhotoURL: payload => dispatch(setProfilePhotoURL(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);