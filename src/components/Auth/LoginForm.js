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
    }

    handleFocus = e => {
        e.target.classList.add('add');
    }

    handleBlur = e => {
        if(!e.target.value.length) {
            e.target.classList.remove('add');
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className='col-6 m-auto'>
                <h2 className='t-center'>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-group'>
                        <label className='input-label' htmlFor="email">Email</label>
                        <input className='input-control' type="email" id="email" value={this.state.email} onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                    </div>
                    <div className='input-group'>
                        <label className='input-label' htmlFor="password">Password</label>
                        <input className='input-control' type="password" id="password" value={this.state.password} onChange={this.handleChange} onFocus={this.handleFocus}
                               onBlur={this.handleBlur} required/>
                    </div>
                    <div className='input-group'>
                        <button>Login</button>
                        <Link to={'/signup'}>Don't have an account yet?</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;