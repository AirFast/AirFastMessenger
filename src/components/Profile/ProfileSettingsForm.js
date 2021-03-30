import React, {Component} from 'react';
import {connect} from 'react-redux';
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
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='row'>
                    <div className="col-6">
                        <input type='file' id='photoURL' onChange={this.handleChange}/>
                    </div>
                    <div className="col-6">
                        <button type='submit'>Update</button>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.firebase.auth
});

const mapDispatchToProps = dispatch => ({
    updateProfile: payload => dispatch(updateProfile(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsForm);