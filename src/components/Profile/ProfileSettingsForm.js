import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './Profile.module.css';
import {updateProfilePhoto} from '../../store/actions/profileActions';

class ProfileSettingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }

        this.handleChange = this.handleChange.bind(this);
        // this.handleFocus = this.handleFocus.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
        // this.handleToggleShowPassword = this.handleToggleShowPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = e => {
        if (e.target.files[0]) {
            this.props.updateProfilePhoto(e.target.files[0]);
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        // this.props.updateProfile(this.state.file);
    }

    render() {
        const {profile} = this.props;

        console.log(profile)

        return (
            <>
                <div className='col-4 t-center'>
                    <label htmlFor='photoURL' className='input-file-label'>
                            <span className={profile.isUpdatingPhoto ? styles.profileSettingsAvatar + ' ' + styles.isLoading : styles.profileSettingsAvatar}>
                                {profile.photoURL ? <img src={profile.photoURL}
                                                         alt={profile.firstName + ' ' + profile.lastName}/> : profile.initials}
                            </span>
                    </label>
                    <input className='input-file-btn' type='file' id='photoURL' onChange={this.handleChange}/>
                </div>
                <form className='col-8' onSubmit={this.handleSubmit}>
                    <h2>{profile.firstName} {profile.lastName}</h2>
                    <p>This is your profile page. Here you can make the necessary settings.</p>
                    <button className='input-btn' type='submit'>Update</button>
                </form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    profile: {
        ...state.firebase.profile,
        ...state.profile
    },
});

const mapDispatchToProps = dispatch => ({
    updateProfilePhoto: file => dispatch(updateProfilePhoto(file)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsForm);