import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './Profile.module.css';
import {updateProfilePhoto} from '../../store/actions/profileActions';
import {Link} from "react-router-dom";

class ProfileForm extends Component {
    constructor(props) {
        super(props);

        // this.handleChange = this.handleChange.bind(this);
        this.handleChangeProfilePhoto = this.handleChangeProfilePhoto.bind(this);
        // this.handleFocus = this.handleFocus.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
        // this.handleToggleShowPassword = this.handleToggleShowPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChangeProfilePhoto = e => {
        if (e.target.files[0]) {
            this.props.updateProfilePhoto(e.target.files[0]);
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        // this.props.updateProfile(this.state.file);
    }

    render() {
        const {profile, profileForm} = this.props;

        console.log(profile)

        return (
            <>
                <div className='col-4 t-center'>
                    <label htmlFor='photoURL' className='input-file-label'>
                            <span className={profileForm.isUpdatingPhoto ? styles.profileSettingsAvatar + ' ' + styles.isLoading : styles.profileSettingsAvatar}>
                                {profile.photoURL ? <img src={profile.photoURL}
                                                         alt={profile.firstName + ' ' + profile.lastName}/> : profile.initials}
                            </span>
                    </label>
                    <input className='input-file-btn' type='file' id='photoURL' onChange={this.handleChangeProfilePhoto}/>
                </div>
                <form className='auth-form col-8' onSubmit={this.handleSubmit}>
                    <div className={profileForm.firstName ? 'input-group input-label-up' : 'input-group'}>
                        <label className='input-label' htmlFor='firstName'>First name</label>
                        <input className='input-control' type='text' id='firstName' value={profileForm.firstName}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required autoFocus/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className={profileForm.lastName ? 'input-group input-label-up' : 'input-group'}>
                        <label className='input-label' htmlFor='lastName'>Last name</label>
                        <input className='input-control' type='text' id='lastName' value={profileForm.lastName}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className='input-group'>
                        <button type='submit' className='input-btn'>Signup</button>
                        <span className="auth-form-info">Already have an account? <Link className='link'
                                                                                        to={'/login'}>Login.</Link></span>
                        {profileForm.signupError && <span className='auth-form-err'>{profileForm.signupError}</span>}
                    </div>
                </form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.firebase.profile,
    profileForm: state.profile
});

const mapDispatchToProps = dispatch => ({
    updateProfilePhoto: file => dispatch(updateProfilePhoto(file)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);