import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeSignupInputs, signup, signupValidationError} from '../../store/actions/authActions';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenPassword: true,
            hiddenPasswordConfirm: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleToggleShowPassword = this.handleToggleShowPassword.bind(this);
        this.handleToggleShowPasswordConfirm = this.handleToggleShowPasswordConfirm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.props.changeSignupInputs(e.target);
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

    handleToggleShowPassword = () => {
        this.setState({
            hiddenPassword: !this.state.hiddenPassword
        });
    };

    handleToggleShowPasswordConfirm = () => {
        this.setState({
            hiddenPasswordConfirm: !this.state.hiddenPasswordConfirm
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const {signupForm} = this.props;

        if (signupForm.password === signupForm.passwordConfirm) {
            this.props.signup(signupForm);
        } else {
            this.props.signupValidationError();
        }
    }

    render() {
        const {signupForm} = this.props;

        return (
            <div className='col-5 col-md-7 col-sm-12 p-60 m-auto'>
                <h2 className='t-center'>Signup</h2>
                <form className='auth-form' onSubmit={this.handleSubmit}>
                    <div className={signupForm.firstName ? 'input-group input-label-up' : 'input-group'}>
                        <label className='input-label' htmlFor='firstName'>First name</label>
                        <input className='input-control' type='text' id='firstName' value={signupForm.firstName}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required autoFocus/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className={signupForm.lastName ? 'input-group input-label-up' : 'input-group'}>
                        <label className='input-label' htmlFor='lastName'>Last name</label>
                        <input className='input-control' type='text' id='lastName' value={signupForm.lastName}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className={signupForm.email ? 'input-group input-label-up' : 'input-group'}>
                        <label className='input-label' htmlFor='email'>Email</label>
                        <input className='input-control' type='text' id='email' value={signupForm.email}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className={signupForm.password ? 'input-group input-label-up' : 'input-group'}>
                        <label className='input-label' htmlFor='password'>Password</label>
                        <input className='input-control' type={this.state.hiddenPassword ? 'password' : 'text'}
                               id='password' value={signupForm.password}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                        <button className='input-show-password' type='button' onClick={this.handleToggleShowPassword}>
                            <i className={this.state.hiddenPassword ? 'eye-icon' : 'eye-icon show'}></i>
                        </button>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className={signupForm.passwordConfirm ? 'input-group input-label-up' : 'input-group'}>
                        <label className='input-label' htmlFor='passwordConfirm'>Confirm password</label>
                        <input className='input-control' type={this.state.hiddenPasswordConfirm ? 'password' : 'text'}
                               id='passwordConfirm'
                               value={signupForm.passwordConfirm}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                        <button className='input-show-password' type='button'
                                onClick={this.handleToggleShowPasswordConfirm}>
                            <i className={this.state.hiddenPasswordConfirm ? 'eye-icon' : 'eye-icon show'}></i>
                        </button>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className='input-group'>
                        <button type='submit' className='input-btn'>Signup</button>
                        <span className="auth-form-info">Already have an account? <Link className='link'
                                                                                        to={'/login'}>Login.</Link></span>
                        {signupForm.signupError && <span className='auth-form-err'>{signupForm.signupError}</span>}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    signupForm: state.auth.signup,
});

const mapDispatchToProps = dispatch => ({
    changeSignupInputs: payloads => dispatch(changeSignupInputs(payloads)),
    signup: newUser => dispatch(signup(newUser)),
    signupValidationError: () => dispatch(signupValidationError()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);