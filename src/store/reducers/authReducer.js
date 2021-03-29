import {
    CHANGE_LOGIN_INPUTS,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_VALIDATION_ERROR
} from '../actions/authActions';

const initState = {
    login: {
        email: '',
        password: '',
        loginError: null
    },
    signup: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        signupError: null
    }
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN_INPUTS:
            return {
                ...state,
                login: {
                    ...state.login,
                    [action.payloads.id]: action.payloads.value
                }
            }
        case LOGIN_ERROR:
            return  {
                ...state,
                login: {
                    ...state.login,
                    loginError: action.err.message
                }
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    ...state.login,
                    email: '',
                    password: '',
                    loginError: null
                }
            }
        case LOGOUT_SUCCESS:
            return state;
        case SIGNUP_ERROR:
            return {
                ...state,
                signupError: action.err.message
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signupError: null
            }
        case SIGNUP_VALIDATION_ERROR:
            return {
                ...state,
                signupError: 'The password confirmation does not match.'
            }
        default:
            return state;
    }
}

export default authReducer;