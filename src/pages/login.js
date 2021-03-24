import React, {Component} from 'react';
import LoginForm from '../components/Auth/LoginForm';

class Login extends Component {
    render() {
        return (
            <div className='row h-100'>
                <LoginForm/>
            </div>
        );
    }
}

export default Login;