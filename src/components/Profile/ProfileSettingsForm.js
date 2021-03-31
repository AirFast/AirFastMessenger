import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './Profile.module.css';
import {updateProfile} from '../../store/actions/profileActions';

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
        this.props.updateProfile(e.target.files[0]);
    }

    handleSubmit = e => {
        e.preventDefault();
        // this.props.updateProfile(this.state.file);
    }

    render() {
        const {profile} = this.props;

        return (
            <>
                <div className='col-4 t-center'>
                    <label htmlFor='photoURL' className='input-file-label'>
                            <span className={styles.profileSettingsAvatar + ' ' + styles.isLoading}>
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
    profile: state.firebase.profile,
});

const mapDispatchToProps = dispatch => ({
    updateProfile: file => dispatch(updateProfile(file)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsForm);