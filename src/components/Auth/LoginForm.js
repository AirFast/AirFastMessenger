import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../store/actions/authActions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hiddenPassword: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleToggleShowPassword = this.handleToggleShowPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
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
        this.props.login(this.state);
    };

    render() {
        const {loginError} = this.props;

        return (
            <div className='col-5 col-md-7 col-sm-12 p-60 m-auto'>
                <h2 className='t-center'>Login</h2>
                <form className='auth-form' onSubmit={this.handleSubmit}>
                    <div className='input-group'>
                        <label className='input-label' htmlFor='email'>Email</label>
                        <input className='input-control' type='text' id='email' value={this.state.email}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required autoFocus/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className='input-group'>
                        <label className='input-label' htmlFor='password'>Password</label>
                        <input className='input-control' type={this.state.hiddenPassword ? 'password' : 'text'}
                               id='password' value={this.state.password}
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
                        {loginError && <span className='auth-form-err'>{loginError}</span>}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loginError: state.auth.loginError,
});

const mapDispatchToProps = dispatch => ({
    login: credentials => dispatch(login(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);