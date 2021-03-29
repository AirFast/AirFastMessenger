import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeLoginInputs, login} from '../../store/actions/authActions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenPassword: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleToggleShowPassword = this.handleToggleShowPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = e => {
        this.props.changeLoginInputs(e.target);

        if (!!e.target.checkValidity()) {
            e.target.parentElement.classList.add('input-is-valid');
        } else {
            e.target.parentElement.classList.remove('input-is-valid');
        }
    };

    handleFocus = e => {
        e.target.parentElement.classList.add('input-label-up');
    };

    handleBlur = e => {
        if (!e.target.value.length) {
            e.target.parentElement.classList.remove('input-label-up');
        }
    };

    handleToggleShowPassword = () => {
        this.setState({
            hiddenPassword: !this.state.hiddenPassword
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.props.loginForm);
    };

    render() {
        const {loginForm} = this.props;

        return (
            <div className='col-5 col-md-7 col-sm-12 p-60 m-auto'>
                <h2 className='t-center'>Login</h2>
                <form className='auth-form' onSubmit={this.handleSubmit}>
                    <div className={loginForm.email ? 'input-group input-label-up' : 'input-group'}>
                        <label className='input-label' htmlFor='email'>Email</label>
                        <input className='input-control' type='text' id='email' value={loginForm.email}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required autoFocus/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className={loginForm.password ? 'input-group input-label-up' : 'input-group'}>
                        <label className='input-label' htmlFor='password'>Password</label>
                        <input className='input-control' type={this.state.hiddenPassword ? 'password' : 'text'}
                               id='password' value={loginForm.password}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                        <button className='input-show-password' type='button' onClick={this.handleToggleShowPassword}>
                            <i className={this.state.hiddenPassword ? 'eye-icon' : 'eye-icon show'}></i>
                        </button>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className='input-group'>
                        <button type='submit' className='input-btn'>Login</button>
                        <span className='auth-form-info'>Don't have an account yet? <Link className='link'
                                                                                          to={'/signup'}>Signup.</Link></span>
                        {loginForm.loginError && <span className='auth-form-err'>{loginForm.loginError}</span>}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loginForm: state.auth.login,
});

const mapDispatchToProps = dispatch => ({
    changeLoginInputs: payloads => dispatch(changeLoginInputs(payloads)),
    login: credentials => dispatch(login(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);