import React, {Component} from 'react';
import SignupForm from "../components/Auth/SignupForm";

class Signup extends Component {
    render() {
        return (
            <div className='row'>
                <h1>Signup page</h1>
                <SignupForm/>
            </div>
        );
    }
}

export default Signup;