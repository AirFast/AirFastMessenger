import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signup, signupValidationError} from '../../store/actions/authActions';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
        if (!!e.target.checkValidity()) {
            e.target.parentElement.classList.add('input-is-valid');
        } else {
            e.target.parentElement.classList.remove('input-is-valid');
        }
    }

    handleFocus = e => {
        e.target.parentElement.classList.add('input-label-up');
    }

    handleBlur = e => {
        if (!e.target.value.length) {
            e.target.parentElement.classList.remove('input-label-up');
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.password === this.state.passwordConfirm) {
            this.props.signup(this.state);
        } else {
            this.props.signupValidationError();
        }
    }

    render() {
        const {signupError} = this.props;

        return (
            <div className='col-5 col-md-7 col-sm-12 p-60 m-auto'>
                <h2 className='t-center'>Signup</h2>
                <form className='auth-form' onSubmit={this.handleSubmit}>
                    <div className='input-group'>
                        <label className='input-label' htmlFor='firstName'>First name</label>
                        <input className='input-control' type='text' id='firstName' value={this.state.firstName}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required autoFocus/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className='input-group'>
                        <label className='input-label' htmlFor='lastName'>Last name</label>
                        <input className='input-control' type='text' id='lastName' value={this.state.lastName}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className='input-group'>
                        <label className='input-label' htmlFor='email'>Email</label>
                        <input className='input-control' type='text' id='email' value={this.state.email}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className='input-group'>
                        <label className='input-label' htmlFor='password'>Password</label>
                        <input className='input-control' type='password' id='password' value={this.state.password}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className='input-group'>
                        <label className='input-label' htmlFor='passwordConfirm'>Confirm password</label>
                        <input className='input-control' type='password' id='passwordConfirm'
                               value={this.state.passwordConfirm}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className='input-group'>
                        <button type='submit' className='input-btn'>Signup</button>
                        <span className="auth-form-info">Already have an account? <Link className='link'
                                                                                        to={'/login'}>Login.</Link></span>
                        {signupError && <span className='auth-form-err'>{signupError}</span>}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    signupError: state.auth.signupError,
});

const mapDispatchToProps = dispatch => ({
    signup: newUser => dispatch(signup(newUser)),
    signupValidationError: () => dispatch(signupValidationError()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);