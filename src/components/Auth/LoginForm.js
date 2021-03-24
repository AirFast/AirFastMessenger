import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        console.log(this.state);
    }

    render() {
        return (
            <div className='col-5 col-md-7 col-sm-12 m-auto'>
                <h2 className='t-center'>Login</h2>
                <form className='auth-form' onSubmit={this.handleSubmit}>
                    <div className='input-group'>
                        <label className='input-label' htmlFor="email">Email</label>
                        <input className='input-control' type="email" id="email" value={this.state.email}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required autoFocus/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className='input-group'>
                        <label className='input-label' htmlFor="password">Password</label>
                        <input className='input-control' type="password" id="password" value={this.state.password}
                               onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                        <span className='input-border-bottom'></span>
                    </div>
                    <div className='input-group'>
                        <button className='input-btn'>Login</button>
                        <Link className='link' to={'/signup'}>Don't have an account yet?</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;