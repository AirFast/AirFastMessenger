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
        this.setState({
            file: e.target.files[0]
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateProfile(this.state.file);
    }

    render() {
        const {profile} = this.props;

        return (
            <form className='w-100' onSubmit={this.handleSubmit}>
                <div className='row'>
                    <div className='col-6 t-center'>
                        <label htmlFor='photoURL' className='input-file-label'>
                            <span className={styles.profileSettingsAvatar}>
                                {profile.photoURL ? <img src={profile.photoURL}
                                                         alt={profile.firstName + ' ' + profile.lastName}/> : profile.initials}
                            </span>
                        </label>
                        <input className='input-file-btn' type='file' id='photoURL' onChange={this.handleChange}/>
                    </div>
                    <div className='col-6'>
                        <h2>{profile.firstName} {profile.lastName}</h2>
                        <p>This is your profile page. Here you can make the necessary settings.</p>
                        <button className='input-btn' type='submit'>Update</button>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.firebase.profile,
});

const mapDispatchToProps = dispatch => ({
    updateProfile: payload => dispatch(updateProfile(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsForm);