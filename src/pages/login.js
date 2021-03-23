import React, {Component} from 'react';
import LoginForm from '../components/Auth/LoginForm';

class Login extends Component {
    render() {
        return (
            <div className='row'>
                <LoginForm/>
            </div>
        );
    }
}

export default Login;